# Regenerate _devices/ from tools/devices.xlsx:
#   pip install pandas openpyxl
#   python3 tools/xlsx_to_devices.py tools/devices.xlsx _devices
# Download/changelog links are built from the codename (see rom_links in _config.yml).
# Rewrites every file in _devices/, keeping test builds (type: test), archived builds
# (archived: true) and notes below the front matter.
import sys, os, glob, pandas as pd
src, out = sys.argv[1], sys.argv[2]
df = pd.read_excel(src, sheet_name='Devices', dtype=str)
# Keep what the spreadsheet doesn't hold: test and archived builds, and any
# text after the front matter. Everything else is regenerated.
kept = {}
for f in glob.glob(out + '/*.md'):
    text = open(f).read()
    parts = text.split('---\n', 2)
    front, body = (parts[1], parts[2]) if len(parts) == 3 else ('', '')
    blocks, cur = [], None
    for line in front.splitlines(keepends=True):
        if line.startswith('  - '):
            cur = [line]; blocks.append(cur)
        elif cur is not None and line.startswith('    '):
            cur.append(line)
        else:
            cur = None
    tests = [''.join(b) for b in blocks if any(l.strip() in ('type: test', 'archived: true') for l in b)]
    kept[os.path.basename(f)[:-3]] = (tests, body)
    os.remove(f)
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
    if r.get('Stage', '').lower() == 'coming soon': L.append('stage: coming-soon')  # development not started
    L += [f'order: {order}', 'maintained: true', '']
    # ROM columns: Yes = published, Soon = in development (not published yet), No = not offered
    roms = [(n, r[n].lower()) for n in ('Evolution X', 'LineageOS') if r[n].lower() in ('yes', 'soon')]
    if roms:
        L.append('roms:')
    for n, state in roms:
        L += [f'  - name: {n}']  # official: Android version and build info load live
        if state == 'soon': L.append('    released: false')
        L += ['    # version: ""', '    # status: active      # active | discontinued', '    # date: 2026-11-03']
    tests, body = kept.get(cn, ([], ''))
    if not roms:
        L.append('roms: []' if not tests else 'roms:')
    L += [t.rstrip('\n') for t in tests]
    L += ['---', body.rstrip('\n'), ''] if body.strip() else ['---', '']
    open(f'{out}/{cn}.md', 'w').write('\n'.join(L)); made.append(cn)
print(len(made), 'devices'); print('skipped (no codename):', skipped)
