import './sass/main.scss';
import menuCards from './menu.json';
import cardNameTpl from '../templates/card.hbs';

const Theme = {
LIGHT: 'light-theme',
DARK: 'dark-theme',
};
const menuMarcup = createMenuCardsMarkup(menuCards);

function createMenuCardsMarkup(menuCards) {
return menuCards.map(menuCard => cardNameTpl(menuCard)).join('');
}

const changeTheme = e => {
if (e.target.checked) {
updateClass(Theme.DARK, Theme.LIGHT);
updateLocalStorage(Theme.DARK);
} else {
updateClass(Theme.LIGHT, Theme.DARK);
updateLocalStorage(Theme.LIGHT);
}
};

function updateLocalStorage(theme) {
localStorage.setItem('theme', theme);
}

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
themeSwitchToggleRef.addEventListener('change', changeTheme);
const bodyRef = document.querySelector('body');

function updateClass(addC, remC) {
bodyRef.classList.remove(remC);
bodyRef.classList.add(addC);
}

const theme = localStorage.getItem('theme');
bodyRef.classList.add(theme);

if (theme === Theme.DARK) {
themeSwitchToggleRef.setAttribute('checked', 'true');
}

const ulJsMenuRef = document.querySelector('.menu.js-menu');
ulJsMenuRef.innerHTML = menuMarcup;