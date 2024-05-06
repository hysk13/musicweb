const themeChangeBtn = document.querySelector('#theme-change');
const volumeSlider = document.querySelector('#volume-slider');
const themeAppliance = document.querySelector('#theme-select');

let volume = 100;
let darkMode = true;

function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        themeAppliance.href = './styles/themes/dark.css';
    } else {
        themeAppliance.href = './styles/themes/light.css';
    }
}

themeChangeBtn.addEventListener('click', toggleDarkMode);

volumeSlider.addEventListener('input', function() {
    const newVolume = Math.round(volumeSlider.value);
    player.setVolume(newVolume);
});