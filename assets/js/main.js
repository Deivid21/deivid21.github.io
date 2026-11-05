// ── Language (EN default, ES optional) ──────────────────
const I18N = JSON.parse(document.getElementById('i18n-data')?.textContent || '{}');

function getLang() {
  try { return localStorage.getItem('lang') === 'es' ? 'es' : 'en'; } catch { return 'en'; }
}

function t(key) {
  const lang = document.documentElement.lang;
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || key;
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch {}

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

if (getLang() === 'es') applyLang('es');

// ── Search + platform filter + "active only" ────────────
(() => {
  const search = document.getElementById('search');
  if (!search) return;

  const onlyActive = document.getElementById('only-active');
  const groups = document.querySelectorAll('[data-common-group]');
  const empty = document.getElementById('no-results');
  const filters = { common: 'all', android: 'all' };

  function apply() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    groups.forEach(g => {
     let inGroup = 0;
     g.querySelectorAll('.device-card').forEach(card => {
      const okCommon = filters.common === 'all' || card.dataset.common === filters.common;
      const okAndroid = filters.android === 'all' || card.dataset.android === filters.android;
      const okText = !q || card.dataset.search.includes(q);
      const okActive = !onlyActive.checked || card.querySelector('.tag-ok');
      const show = okCommon && okAndroid && okText && okActive;
      card.hidden = !show;
      if (show) inGroup++;
     });
     g.hidden = inGroup === 0;
     shown += inGroup;
    });
    empty.hidden = shown > 0;
  }

  document.querySelectorAll('.chips[data-group]').forEach(row => {
    row.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      row.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filters[row.dataset.group] = chip.dataset.filter;
      apply();
    });
  });
  search.addEventListener('input', apply);
  onlyActive.addEventListener('change', apply);

  // Rebuild the Android chips when cards learn their real latest version
  document.addEventListener('devices:android-updated', () => {
    const row = document.querySelector('.chips[data-group="android"]');
    const counts = {};
    document.querySelectorAll('.device-card').forEach(c => { counts[c.dataset.android] = (counts[c.dataset.android] || 0) + 1; });
    delete counts[''];
    if (!(filters.android in counts)) filters.android = 'all';
    row.querySelectorAll('.chip:not([data-filter="all"])').forEach(c => c.remove());
    Object.keys(counts).sort((a, b) => b - a).forEach(v => {
      const b = document.createElement('button');
      b.className = 'chip' + (filters.android === v ? ' active' : '');
      b.type = 'button';
      b.dataset.filter = v;
      b.innerHTML = `Android ${v} <span class="count">${counts[v]}</span>`;
      row.appendChild(b);
    });
    row.querySelector('[data-filter="all"]').classList.toggle('active', filters.android === 'all');
    apply();
  });

  // Open pre-filtered from a link like /devices/#sm6225
  const hash = location.hash.slice(1);
  const pre = hash && document.querySelector(`.chips[data-group="common"] .chip[data-filter="${CSS.escape(hash)}"]`);
  if (pre) pre.click();

})();

// ── Copy hash button ─────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('.copy');
  if (!btn) return;
  navigator.clipboard.writeText(btn.dataset.copy).then(() => {
    btn.textContent = t('copied');
    setTimeout(() => (btn.textContent = t('copy')), 1500);
  });
});

// ── Official build info (LineageOS / Evolution X) ───────
// Official ROM cards are filled with live data from each project. If a
// request fails, the card keeps the values written in the device file.
(() => {
  const cards = document.querySelectorAll('details.rom[data-type="official"]:not(.rom-soon)');
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
      const [builds, targets] = await Promise.all([
        get(fmt(src.builds, { codename })).catch(() => []),
        get(src.targets, 'text').catch(() => ''),
      ]);
      const target = targets.split('\n').map(l => l.trim().split(/\s+/)).find(f => f[0] === codename);
      const b = builds.filter(x => !android || lineageAndroid(x.version) === android)[0];
      if (!b && !target) return null;
      const file = b && b.files && b.files[0];
      return {
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
      const branch = versions.map(v => v.branch)
        .filter(b => !b.endsWith('-vanilla') && dev.branches.includes(b) && (!android || androidOf[b] === android))[0];
      if (!branch) return null;
      const data = await get(fmt(src.builds, { branch, codename }));
      const r = data.response && data.response[0];
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

  function fill(card, info) {
    const set = (field, value) => card.querySelectorAll(`[data-field="${field}"]`).forEach(el => { el.textContent = value; });
    const show = (sel, on = true) => card.querySelectorAll(sel).forEach(el => { el.hidden = !on; });
    if (info.available) {
      card.classList.remove('rom-soon');
      show('[data-field="soon"]', false);
      show('[data-field="actions"]');
    }
    if (info.android) { set('android', info.android); show('[data-field="android-tag"]'); }
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

// ── Copy buttons on code blocks ─────────────────────────
document.querySelectorAll('pre.code').forEach(pre => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.dataset.i18n = 'copy';
  btn.textContent = t('copy');
  btn.addEventListener('click', e => {
    e.stopPropagation();
    navigator.clipboard.writeText(pre.querySelector('code').textContent.trim()).then(() => {
      btn.textContent = t('copied');
      setTimeout(() => (btn.textContent = t('copy')), 1500);
    });
  });
  pre.appendChild(btn);
});

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
    const url = location.origin + location.pathname + '#' + btn.dataset.anchor;
    history.replaceState(null, '', '#' + btn.dataset.anchor);
    const done = () => { btn.textContent = t('link_copied'); setTimeout(() => (btn.textContent = t('copy_link')), 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => {});
  });
})();
