const toggle = document.getElementById('langToggle');
let language = 'ku';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.documentElement.dir = next === 'ku' ? 'rtl' : 'ltr';
  document.body.dir = next === 'ku' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ku][data-en]').forEach((el) => {
    el.textContent = el.dataset[next];
  });
  toggle.textContent = next === 'ku' ? 'EN' : 'KU';
}
toggle.addEventListener('click', () => setLanguage(language === 'ku' ? 'en' : 'ku'));
document.getElementById('year').textContent = new Date().getFullYear();