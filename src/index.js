import cardsTpl from './templates/menu_cards.hbs';
import menu from '../src/menu.json'
import '../src/styles.css';

// Add theme switcher
const switchToggle = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  };

// For checking current theme
currentTheme();

switchToggle.addEventListener('change', onSwitchClick);
function onSwitchClick(e) {
  console.log(e.target.checked);
  e.target.checked ?
    document.body.classList.replace(Theme.LIGHT, Theme.DARK)
    : document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', document.body.className);
}

function currentTheme() {
  const checkTheme = localStorage.getItem('theme');
  if (checkTheme === Theme.DARK) {
    switchToggle.checked = true;
  }
  if (!checkTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.add(Theme.LIGHT)
  } else {
    document.body.classList.add(checkTheme);
  }
}

// Add cards menu murkup
const menuRef = document.querySelector('.js-menu');
const markup = createMarkupCards(menu);
function createMarkupCards(menu) {
  return cardsTpl(menu);
  }

menuRef.insertAdjacentHTML('beforeend', markup);
