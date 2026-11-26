//
// For more Support see: https://t.me/Deivid21Hub
//
// Copyright (C) 2017 - 2026 Deivid Ignacio Parra (Deivid21)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// ── Language (EN default, ES optional) ──────────────────
const I18N = JSON.parse(document.getElementById('i18n-data')?.textContent || '{}');

// A language picked with the EN/ES toggle wins; otherwise follow the system language
function systemLang() {
  const first = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  return first.slice(0, 2).toLowerCase() === 'es' ? 'es' : 'en';
}

function getLang() {
  try {
    const saved = localStorage.getItem('lang');
    return saved === 'es' || saved === 'en' ? saved : systemLang();
  } catch { return systemLang(); }
}

function t(key) {
  const lang = document.documentElement.lang;
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || key;
}

function applyLang(lang, remember = true) {
  document.documentElement.lang = lang;
  if (remember) try { localStorage.setItem('lang', lang); } catch {}

  // Interface strings from _data/i18n.yml
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

  // Per-item translations: data-es="…" (titles, notes, descriptions)
  document.querySelectorAll('[data-es]').forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.textContent;
    el.textContent = lang === 'es' ? el.dataset.es : el.dataset.en;
  });
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  applyLang(document.documentElement.lang === 'es' ? 'en' : 'es');
});

if (getLang() === 'es') applyLang('es', false);  // don't save it, so the system language keeps deciding

// Copy text to the clipboard and show a short confirmation on the button
function copyWithFeedback(btn, text, doneKey = 'copied', idleKey = 'copy') {
  if (!navigator.clipboard || !text) return;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = t(doneKey);
    setTimeout(() => (btn.textContent = t(idleKey)), 1500);
  }, () => {});
}

// ── Theme: system (default) → light → dark ──────────────
(() => {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const order = ['auto', 'light', 'dark'];
  const current = () => document.documentElement.dataset.theme || 'auto';
  const label = () => { const l = t('theme_' + current()); btn.title = l; btn.setAttribute('aria-label', l); };
  // Browser/system bars (theme-color): both tags start with their scheme's color
  // (set in head.html); a picked theme paints both with that color
  const metas = [...document.querySelectorAll('meta[name="theme-color"]')];
  const schemeOf = m => (m.media.includes('dark') ? 'dark' : 'light');
  const bars = Object.fromEntries(metas.map(m => [schemeOf(m), m.content]));
  const paintBars = () => metas.forEach(m => {
    m.content = bars[current() === 'auto' ? schemeOf(m) : current()];
  });
  btn.addEventListener('click', () => {
    const next = order[(order.indexOf(current()) + 1) % order.length];
    if (next === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = next;
    try { next === 'auto' ? localStorage.removeItem('theme') : localStorage.setItem('theme', next); } catch {}
    label();
    paintBars();
  });
  document.getElementById('lang-toggle')?.addEventListener('click', label);
  label();
  paintBars();
})();

// ── Devices finder: search, filters panel, sorting ──────
(() => {
  const search = document.getElementById('search');
  const panel = document.getElementById('filters-panel');
  if (!search || !panel) return;

  const cards = [...document.querySelectorAll('.device-card')];
  const groups = [...document.querySelectorAll('[data-common-group]')];
  const flat = document.getElementById('flat-grid');
  const empty = document.getElementById('no-results');
  const total = cards.length;
  const DEFAULTS = { q: '', common: 'all', android: 'all', rom: 'all', status: 'all', sort: 'common' };
  const state = { ...DEFAULTS };

  // Search ignores case, spaces and punctuation: "g52", "Moto G 52" and "moto-g52" all match
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[^a-z0-9|]/g, '');
  cards.forEach(c => {
    c._home = c.parentElement;
    c._index = norm(c.dataset.search);
  });
  const matches = (card, q) => {
    if (!q.trim()) return true;
    const words = q.trim().split(/\s+/).map(norm).filter(Boolean);
    return words.every(w => card._index.includes(w)) || card._index.includes(norm(q));
  };

  const fmt = (key, vars) => t(key).replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const chipRows = [...panel.querySelectorAll('.chips[data-filter-key]')];
  const selects = [...panel.querySelectorAll('select[data-filter-key]')];

  function syncControls() {
    search.value = state.q;
    document.getElementById('search-clear').hidden = !state.q;
    selects.forEach(sel => { sel.value = state[sel.dataset.filterKey]; });
    chipRows.forEach(row => row.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.value === state[row.dataset.filterKey])));
  }

  function labelFor(key) {
    const v = state[key];
    if (key === 'common') return panel.querySelector(`#f-common option[value="${CSS.escape(v)}"]`)?.textContent.replace(/\s*\(\d+\)$/, '') || v;
    if (key === 'android') return 'Android ' + v;
    if (key === 'sort') return t('sort_by') + ': ' + panel.querySelector(`#f-sort option[value="${v}"]`).textContent;
    const chip = panel.querySelector(`.chips[data-filter-key="${key}"] .chip[data-value="${v}"]`);
    return chip ? chip.firstChild.textContent.trim() : v;
  }

  function renderActive() {
    const box = document.getElementById('active-filters');
    box.innerHTML = '';
    const keys = ['common', 'android', 'rom', 'status', 'sort'].filter(k => state[k] !== DEFAULTS[k]);
    keys.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip chip-removable';
      b.textContent = labelFor(k) + ' ✕';
      b.addEventListener('click', () => { state[k] = DEFAULTS[k]; update(); });
      box.appendChild(b);
    });
    if (keys.length > 1) {
      const all = document.createElement('button');
      all.type = 'button';
      all.className = 'link-btn';
      all.textContent = t('clear_all');
      all.addEventListener('click', reset);
      box.appendChild(all);
    }
    const badge = document.getElementById('filters-badge');
    badge.hidden = !keys.length;
    badge.textContent = keys.length;
  }

  function apply() {
    const visible = cards.filter(c => {
      const show = matches(c, state.q)
        && (state.common === 'all' || c.dataset.common === state.common)
        && (state.android === 'all' || c.dataset.android === state.android)
        && (state.rom === 'all' || c.dataset.roms.split(',').includes(state.rom))
        && (state.status === 'all' || c.dataset.status === state.status);
      c.hidden = !show;
      return show;
    });

    if (state.sort === 'common') {
      cards.forEach(c => c._home.appendChild(c));  // back to their common tree, original order
      groups.forEach(g => { g.hidden = !g.querySelector('.device-card:not([hidden])'); });
      flat.hidden = true;
    } else {
      const sorted = [...cards].sort(state.sort === 'name'
        ? (a, b) => a.dataset.name.localeCompare(b.dataset.name, undefined, { numeric: true })
        : (a, b) => (b.dataset.date || '').localeCompare(a.dataset.date || '') || a.dataset.name.localeCompare(b.dataset.name));
      sorted.forEach(c => flat.appendChild(c));
      groups.forEach(g => { g.hidden = true; });
      flat.hidden = !visible.length;
    }

    empty.hidden = visible.length > 0;
    document.getElementById('results-count').textContent = fmt('results_count', { n: visible.length, total });
    document.getElementById('filters-show').textContent = fmt('show_results', { n: visible.length });
  }

  // Keep filters in the URL so a filtered view can be shared: /devices/?common=sm6375&rom=lineageos
  function writeUrl() {
    const params = new URLSearchParams();
    Object.keys(DEFAULTS).forEach(k => { if (state[k] !== DEFAULTS[k]) params.set(k, state[k]); });
    const qs = params.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
  }

  function update() {
    syncControls();
    renderActive();
    apply();
    writeUrl();
  }

  function reset() {
    Object.assign(state, DEFAULTS);
    update();
  }

  // Android chips are built from the cards, and rebuilt when cards learn their live version
  function buildAndroidChips() {
    const row = panel.querySelector('.chips[data-filter-key="android"]');
    const counts = {};
    cards.forEach(c => { if (c.dataset.android) counts[c.dataset.android] = (counts[c.dataset.android] || 0) + 1; });
    row.querySelectorAll('.chip:not([data-value="all"])').forEach(c => c.remove());
    Object.keys(counts).sort((a, b) => b - a).forEach(v => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.type = 'button';
      b.dataset.value = v;
      b.innerHTML = `Android ${v} <span class="count">${counts[v]}</span>`;
      row.appendChild(b);
    });
    if (state.android !== 'all' && !(state.android in counts)) state.android = 'all';
  }

  // Counts on the ROM and status chips
  chipRows.filter(r => r.dataset.filterKey === 'rom' || r.dataset.filterKey === 'status').forEach(row => {
    const key = row.dataset.filterKey;
    row.querySelectorAll('.chip:not([data-value="all"])').forEach(chip => {
      const n = cards.filter(c => key === 'rom' ? c.dataset.roms.split(',').includes(chip.dataset.value) : c.dataset.status === chip.dataset.value).length;
      if (!n) { chip.remove(); return; }
      const span = document.createElement('span');
      span.className = 'count';
      span.textContent = n;
      chip.append(' ', span);
    });
  });

  // Events
  search.addEventListener('input', () => { state.q = search.value; document.getElementById('search-clear').hidden = !state.q; apply(); writeUrl(); });
  document.getElementById('search-clear').addEventListener('click', () => { state.q = ''; update(); search.focus(); });
  selects.forEach(sel => sel.addEventListener('change', () => { state[sel.dataset.filterKey] = sel.value; update(); }));
  chipRows.forEach(row => row.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    state[row.dataset.filterKey] = chip.dataset.value;
    update();
  }));
  document.getElementById('filters-open').addEventListener('click', () => panel.showModal());
  document.getElementById('filters-clear').addEventListener('click', () => { const q = state.q; reset(); state.q = q; update(); });
  document.getElementById('no-results-clear').addEventListener('click', reset);
  panel.addEventListener('click', e => { if (e.target === panel) panel.close(); });  // tap outside closes
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== search && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); search.focus(); }
  });
  document.getElementById('lang-toggle')?.addEventListener('click', () => { renderActive(); apply(); });
  document.addEventListener('devices:android-updated', () => { buildAndroidChips(); update(); });

  // Initial state from the URL (?common=…&rom=…) or an old-style #sm6225 link
  const params = new URLSearchParams(location.search);
  Object.keys(DEFAULTS).forEach(k => { if (params.has(k)) state[k] = params.get(k); });
  const hash = location.hash.slice(1);
  if (hash && panel.querySelector(`#f-common option[value="${CSS.escape(hash)}"]`)) state.common = hash;
  buildAndroidChips();
  update();
})();

// ── Guides search ────────────────────────────────────────
(() => {
  const input = document.getElementById('guide-search');
  if (!input) return;
  const items = [...document.querySelectorAll('[data-guide]')];
  const clear = document.getElementById('guide-search-clear');
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');
  items.forEach(li => { li._index = norm(li.dataset.search); });
  const fmt = (key, vars) => t(key).replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  function apply() {
    const words = input.value.trim().split(/\s+/).map(norm).filter(Boolean);
    let n = 0;
    items.forEach(li => {
      const show = words.every(w => li._index.includes(w));
      li.hidden = !show;
      if (show) n++;
    });
    clear.hidden = !input.value;
    document.getElementById('guide-empty').hidden = n > 0;
    document.getElementById('guide-count').textContent = fmt('guides_count', { n, total: items.length });
  }
  input.addEventListener('input', apply);
  clear.addEventListener('click', () => { input.value = ''; apply(); input.focus(); });
  document.getElementById('lang-toggle')?.addEventListener('click', apply);
  apply();
})();

// ── Copy buttons: SHA256 hashes (data-copy) and code blocks ──
document.addEventListener('click', e => {
  const btn = e.target.closest('.copy');
  if (!btn) return;
  const code = btn.closest('pre')?.querySelector('code');
  copyWithFeedback(btn, btn.dataset.copy || (code && code.textContent.trim()));
});

// ── Official build info (LineageOS / Evolution X) ───────
// Official ROM cards are filled with live data from each project. If a
// request fails, the card keeps the values written in the device file.
// Cards with their own download link (older builds) stay as written.
(() => {
  const cards = document.querySelectorAll('details.rom[data-type="official"]:not(.rom-soon):not(.rom-archived):not([data-static])');
  const srcEl = document.getElementById('rom-sources');
  if (!cards.length || !srcEl) return;
  const SRC = JSON.parse(srcEl.textContent || '{}');

  const cache = {};
  const get = (url, as = 'json') => (cache[url] ??= fetch(url).then(r => {
    if (!r.ok) throw new Error(r.status);
    return as === 'json' ? r.json() : r.text();
  }));
  const fmt = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const lineageAndroid = v => String(parseInt(v, 10) - 7);  // lineage-24.0 → Android 17

  const loaders = {
    async lineageos(codename, android) {
      const src = SRC.lineageos;
      // Wiki device data: <codename>.yml, or <codename>_variant1.yml for devices with variants
      const wiki = get(fmt(src.wiki, { codename }), 'text')
        .catch(() => get(fmt(src.wiki, { codename: codename + '_variant1' }), 'text'))
        .catch(() => '');
      const [builds, targets, wikiYml] = await Promise.all([
        get(fmt(src.builds, { codename })).catch(() => []),
        get(src.targets, 'text').catch(() => ''),
        wiki,
      ]);
      const m = wikiYml.match(/^maintainers:\s*\[(.*)\]\s*$/m);
      const maintainers = m ? m[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean) : [];
      const target = targets.split('\n').map(l => l.trim().split(/\s+/)).find(f => f[0] === codename);
      const b = builds.filter(x => !android || lineageAndroid(x.version) === android)[0];
      if (!b && !target) return null;
      const file = b && b.files && b.files[0];
      return {
        maintainers,
        available: !!b,
        status: target ? 'active' : 'discontinued',
        android: b ? lineageAndroid(b.version) : lineageAndroid(target[2].replace('lineage-', '')),
        version: b && b.version,
        date: b && b.datetime * 1000,
        sha256: file && file.sha256,
        size: file && file.size,
      };
    },
    async 'evolution-x'(codename, android) {
      const src = SRC['evolution-x'];
      const [devices, versions] = await Promise.all([get(src.devices), get(src.versions)]);
      const dev = devices.find(d => d.codename === codename);
      if (!dev) return null;
      const androidOf = Object.fromEntries(versions.map(v => [v.branch, String(v.version).split('_')[0]]));
      // Newest branch with a build: the website's branch list can lag behind the OTA repo
      const branches = versions.map(v => v.branch)
        .filter(b => !b.endsWith('-vanilla') && (!android || androidOf[b] === android));
      let branch, r;
      for (branch of branches) {
        const data = await get(fmt(src.builds, { branch, codename })).catch(() => null);
        r = data && data.response && data.response[0];
        if (r) break;
      }
      if (!r) return null;
      return {
        available: true,
        status: r.currently_maintained ? 'active' : 'discontinued',
        android: androidOf[branch],
        version: r.version,
        date: r.timestamp * 1000,
        sha256: r.sha256,
        size: r.size,
        forum: r.forum,
      };
    },
  };

  // ROM banner by Android version (live cards learn their version here)
  const banners = (() => { try { return JSON.parse(document.getElementById('rom-banners').textContent); } catch { return {}; } })();
  function setBanner(card, android) {
    const fig = card.querySelector('[data-banner]');
    const map = banners[card.dataset.romName];
    const url = map && (map[String(android)] || map.default);
    if (!fig || !url) return;
    fig.querySelector('img').src = url;
    fig.hidden = false;
  }

  function fill(card, info) {
    const set = (field, value) => card.querySelectorAll(`[data-field="${field}"]`).forEach(el => { el.textContent = value; });
    const show = (sel, on = true) => card.querySelectorAll(sel).forEach(el => { el.hidden = !on; });
    if (info.available) {
      card.classList.remove('rom-soon');
      show('[data-field="soon"]', false);
      show('[data-field="actions"]');
    }
    if (info.android) { set('android', info.android); show('[data-field="android-tag"]'); setBanner(card, info.android); }
    if (info.version) set('version', info.version);
    if (info.date) set('date', new Date(info.date).toISOString().slice(0, 10));
    if (info.status) {
      const dd = card.querySelector('[data-field="status"]');
      dd.innerHTML = `<span class="dot dot-${info.status}"></span><span data-i18n="${info.status}"></span>`;
      dd.lastChild.textContent = t(info.status);
    }
    if (info.size) { set('size', (info.size / 1024 ** 3).toFixed(2) + ' GB'); show('[data-row="size"]'); }
    if (info.sha256) {
      set('sha256', info.sha256);
      card.querySelector('.copy').dataset.copy = info.sha256;
      show('[data-field="hash"]');
    }
    if (info.maintainers && info.maintainers.length) { set('maintainers', info.maintainers.join(', ')); show('[data-row="maintainers"]'); }
    if (info.forum) { card.querySelector('[data-field="forum"]').href = info.forum; show('[data-row="forum"]'); }
  }

  cards.forEach(card => {
    const load = loaders[card.dataset.rom];
    if (!load) return;
    card.classList.add('rom-loading');
    load(card.dataset.codename, card.dataset.android)
      .then(info => info && fill(card, info))
      .catch(() => {})
      .finally(() => card.classList.remove('rom-loading'));
  });
})();

// ── Latest Android version on home page cards ──────────
// A card shows the newest Android version with a published build:
// official LineageOS (hudson build targets), official Evolution X
// (branches listed on its website) and builds in the device file.
(() => {
  const cards = document.querySelectorAll('.device-card[data-codename]');
  const srcEl = document.getElementById('rom-sources');
  if (!cards.length || !srcEl) return;
  const SRC = JSON.parse(srcEl.textContent || '{}');
  const grab = (url, as) => fetch(url).then(r => (r.ok ? r[as]() : null)).catch(() => null);

  Promise.all([
    grab(SRC.lineageos.targets, 'text'),
    grab(SRC['evolution-x'].devices, 'json'),
    grab(SRC['evolution-x'].versions, 'json'),
  ]).then(([targets, evoDevices, evoVersions]) => {
    if (!targets && !(evoDevices && evoVersions)) return;  // keep build-time values

    const lineage = {};
    (targets || '').split('\n').forEach(line => {
      const f = line.trim().split(/\s+/);
      if (f.length > 2 && !f[0].startsWith('#')) lineage[f[0]] = parseInt(f[2].replace('lineage-', ''), 10) - 7;
    });
    const evoAndroid = Object.fromEntries((evoVersions || []).map(v => [v.branch, parseInt(v.version, 10)]));
    const evo = {};
    (evoDevices || []).forEach(d => {
      const v = d.branches.map(b => evoAndroid[b]).filter(Boolean);
      if (v.length) evo[d.codename] = Math.max(...v);
    });

    cards.forEach(card => {
      const cn = card.dataset.codename;
      const roms = card.dataset.official.split(',');
      const found = [parseInt(card.dataset.androidKnown, 10) || 0];
      if (roms.includes('lineageos') && lineage[cn]) found.push(lineage[cn]);
      if (roms.includes('evolution-x') && evo[cn]) found.push(evo[cn]);
      const latest = Math.max(...found);
      if (!latest) return;  // nothing published yet: keep the planned version
      const v = String(latest);
      card.dataset.search = card.dataset.search.replace(/android \d+ a\d+/, `android ${v} a${v}`);
      card.dataset.android = v;
      const el = card.querySelector('[data-field="android"]');
      if (el) el.textContent = v;
    });
    document.dispatchEvent(new Event('devices:android-updated'));
  });
})();

// ── Add a copy button to each code block ─────────────────
document.querySelectorAll('pre.code').forEach(pre => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.dataset.i18n = 'copy';
  btn.textContent = t('copy');
  pre.appendChild(btn);
});

// ── Install guide: commands for the picked device ───────
(() => {
  const sel = document.getElementById('install-device');
  if (!sel) return;
  let data = {};
  try { data = JSON.parse(document.getElementById('install-data').textContent); } catch {}
  const show = codename => {
    const images = data[codename];
    document.querySelectorAll('[data-install-pick]').forEach(el => (el.hidden = !!images));
    document.querySelectorAll('[data-install-steps]').forEach(el => (el.hidden = !images));
    if (!images) return;
    // Flash every image, then reboot to recovery
    const lines = [
      'fastboot getvar max-sparse-size',
      'fastboot oem fb_mode_set',
      ...images.map(p => `fastboot flash ${p} ${p}.img`),
      'fastboot oem fb_mode_clear',
      'fastboot reboot-recovery',
    ];
    document.querySelectorAll('.install-cmds code').forEach(code => (code.textContent = lines.join('\n')));
    document.querySelectorAll('[data-install-files]').forEach(el => (el.textContent = images.map(p => p + '.img').join(', ')));
  };
  sel.addEventListener('change', () => {
    show(sel.value);
    history.replaceState(null, '', sel.value ? '#device=' + sel.value : location.pathname);
  });
  const m = location.hash.match(/device=([\w-]+)/);
  if (m && data[m[1]]) sel.value = m[1];
  show(sel.value);
})();

// ── Moto Camera: device search and setup for the picked device ──
(() => {
  const table = document.getElementById('mc-devices');
  if (!table) return;
  const rows = [...table.querySelectorAll('tbody tr')];
  const search = document.getElementById('mc-search');
  const empty = document.getElementById('mc-empty');
  const chips = [...document.querySelectorAll('.mc-repo-pick .chip')];
  const versionChips = [...document.querySelectorAll('.mc-version-pick .chip')];
  const state = { version: versionChips[0] ? versionChips[0].dataset.version : '17', repo: chips[0] && chips[0].dataset.repo };
  const repos = JSON.parse(document.getElementById('mc-repos').textContent);
  const selected = document.getElementById('mc-selected');
  const makefile = document.querySelector('#mc-makefile code');

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let n = 0;
    rows.forEach(r => { const ok = !q || r.dataset.search.includes(q); r.hidden = !ok; if (ok) n++; });
    empty.hidden = n > 0;
  });

  // Step 1 and 2 follow the picked Android version (branch) and platform repo
  function show() {
    const avail = chips.filter(c => c.dataset.versions.split(' ').includes(state.version));
    if (!avail.some(c => c.dataset.repo === state.repo)) state.repo = avail[0] && avail[0].dataset.repo;
    versionChips.forEach(c => c.classList.toggle('active', c.dataset.version === state.version));
    chips.forEach(c => { c.hidden = !avail.includes(c); c.classList.toggle('active', c.dataset.repo === state.repo); });
    document.querySelectorAll('[data-version-block]').forEach(b => { b.hidden = b.dataset.versionBlock !== state.version; });
    document.querySelectorAll('[data-repo-block]').forEach(b => {
      b.hidden = !(b.dataset.repoBlock === state.repo && b.dataset.version === state.version);
    });
  }
  function showRepo(name) { state.repo = name; show(); }
  chips.forEach(c => c.addEventListener('click', () => showRepo(c.dataset.repo)));
  versionChips.forEach(c => c.addEventListener('click', () => { state.version = c.dataset.version; show(); }));
  show();

  function pick(row, scroll) {
    rows.forEach(r => r.classList.toggle('selected', r === row));
    const { codename, repo, setting, name, android } = row.dataset;
    const repoInfo = repos.find(r => r.name === repo);
    const version = (setting.match(/TARGET_MOTCAMERA(\d)/) || [])[1];
    state.version = android;
    showRepo(repo);
    makefile.textContent = `# Moto Camera ${version}\n${setting}\n\n${repoInfo.inherit}`;
    selected.innerHTML = '';
    const label = document.createElement('span');
    label.dataset.i18n = 'mc_setup_for';
    label.textContent = t('mc_setup_for');
    selected.append(label, ` ${name} (${codename}) · ${repo} · Android ${android}`);
    selected.hidden = false;
    document.getElementById('mc-picked').hidden = true;
    history.replaceState(null, '', `#device=${codename}`);
    if (scroll) document.getElementById('setup').scrollIntoView({ behavior: 'smooth' });
  }
  rows.forEach(r => {
    r.addEventListener('click', e => { if (!e.target.closest('a')) pick(r, true); });
    r.addEventListener('keydown', e => { if (e.key === 'Enter') pick(r, true); });
  });

  // Deep link: /moto-camera/#device=<codename>
  const m = location.hash.match(/^#device=([\w-]+)/);
  const row = m && rows.find(r => r.dataset.codename === m[1]);
  if (row) pick(row, true);
})();

// ── Direct links to a ROM card: /devices/<codename>/#lineageos-test-a17 ──
(() => {
  const cards = document.querySelectorAll('details.rom[id]');
  if (!cards.length) return;
  function openFromHash(scroll) {
    const id = decodeURIComponent(location.hash.slice(1));
    const card = id && document.getElementById(id);
    if (!card || !card.matches('details.rom')) return;
    const group = card.closest('details.rom-archive');
    if (group) group.open = true;
    card.open = true;
    card.classList.add('rom-target');
    setTimeout(() => card.classList.remove('rom-target'), 2400);
    if (scroll) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  openFromHash(true);
  window.addEventListener('hashchange', () => openFromHash(true));
  document.addEventListener('click', e => {
    const btn = e.target.closest('.copy-link');
    if (!btn) return;
    history.replaceState(null, '', '#' + btn.dataset.anchor);
    copyWithFeedback(btn, location.origin + location.pathname + '#' + btn.dataset.anchor, 'link_copied', 'copy_link');
  });
})();
