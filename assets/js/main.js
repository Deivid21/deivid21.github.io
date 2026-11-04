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

