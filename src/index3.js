import './sass/main.scss';
import menuCards from './menu.json'
import cardNameTpl from '../templates/card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuMarcup = createMenuCardsMarkup(menuCards);

function createMenuCardsMarkup(menuCards) {
    return menuCards.map(menuCard => cardNameTpl(menuCard)).join('');
};



const changeTheme = (e) => {
    if (e.target.checked) {
        // bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        // return;
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
        // return;
    };
};

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
themeSwitchToggleRef.addEventListener('change', changeTheme);
const bodyRef = document.querySelector('body');

const theme = localStorage.getItem('theme');
bodyRef.classList.add(theme);

if (theme === Theme.DARK) {
    themeSwitchToggleRef.setAttribute('checked', 'true');
};

const ulJsMenuRef = document.querySelector('.menu.js-menu');
ulJsMenuRef.innerHTML = menuMarcup;