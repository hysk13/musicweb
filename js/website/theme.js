// theme.js - a JavaScript file handling theme changes

const theme = document.querySelector('#app-theme');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeSmall = document.querySelector('#toggle-theme-small');
const html = document.querySelector('#html');
const webWrap = document.querySelector('#website-wrap');

let dark = true;

toggleTheme.onclick = ChangeTheme;
toggleThemeSmall.onclick = ChangeTheme;

function ChangeTheme () {
    if (dark) {
        theme.href = './css/theme/light.css';
        html.style.backgroundColor = 'white';
        webWrap.style.background = 'linear-gradient(#c0deed, #59b5e3)';
        toggleTheme.innerHTML = '<i class="fa fa-sun-o" />';
    } else {
        theme.href = './css/theme/dark.css';
        html.style.backgroundColor = 'black';
        webWrap.style.background = 'linear-gradient(#8a8a8a, #4e524f)';
        toggleTheme.innerHTML = '<i class="fa fa-moon-o" />';
    }
    dark = !dark;
}