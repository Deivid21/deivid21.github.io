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
    const chips = row.querySelectorAll('.chip');
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filters[row.dataset.group] = chip.dataset.filter;
      apply();
    }));
  });
  search.addEventListener('input', apply);
  onlyActive.addEventListener('change', apply);

  // Open pre-filtered from a link like /#sm6225
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
