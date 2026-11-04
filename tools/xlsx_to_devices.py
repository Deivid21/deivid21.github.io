# Regenerate _devices/ from tools/devices.xlsx:
#   pip install pandas openpyxl
#   python3 tools/xlsx_to_devices.py tools/devices.xlsx _devices
# Download/changelog links are built from the codename (see rom_links in _config.yml).
# WARNING: overwrites every file in _devices/ (custom notes and extras included).
import sys, os, glob, pandas as pd
src, out = sys.argv[1], sys.argv[2]
df = pd.read_excel(src, sheet_name='Devices', dtype=str)
for f in glob.glob(out + '/*.md'): os.remove(f)
order, skipped, made = 0, [], []
def q(s): return '"' + s.replace('"', '\\"') + '"'
for _, r in df.iterrows():
    r = {k: (v.strip() if isinstance(v, str) else '') for k, v in r.items()}
    name, cn = r['Device name'], r['Codename']
    if not name and not cn: continue
    order += 1
    if not cn: skipped.append(name); continue
    aka = [a.strip() for a in r['Variants / other names'].split(';') if a.strip()]
    android = r['Android'].split('.')[0]
    L = ['---', f'codename: {cn}', f'name: {q(name)}']
    if aka: L.append('aka: [' + ', '.join(q(a) for a in aka) + ']')
    L.append('vendor: Motorola')
    if r.get('Common'): L.append(f'common: {r["Common"]}')
    if r['Platform']: L.append(f'platform: {r["Platform"]}')
    if r['SoC']: L.append(f'soc: {q(r["SoC"])}')
    if android: L.append(f'android: {android}')
    if r.get('Warning (EN)'): L.append(f'warning: {q(r["Warning (EN)"])}')
    if r.get('Warning (ES)'): L.append(f'warning_es: {q(r["Warning (ES)"])}')
    L += [f'order: {order}', 'maintained: true', '']
    roms = [n for n, col in (('Evolution X', 'Evolution X'), ('LineageOS', 'LineageOS')) if r[col].lower() == 'yes']
    if roms:
        L.append('roms:')
        released = r.get('Released', 'Yes').lower() != 'no'
        for n in roms:
            L += [f'  - name: {n}', f'    android: {android}']
            if not released: L.append('    released: false')
            L += ['    # version: ""', '    # status: Stable      # Stable | Beta | Test', '    # date: 2026-11-03']
    else:
        L.append('roms: []')
    L += ['---', '']
    open(f'{out}/{cn}.md', 'w').write('\n'.join(L)); made.append(cn)
print(len(made), 'devices'); print('skipped (no codename):', skipped)
