//control.js - a JavaScript file handling the control buttons of the website

const ctrlBack = document.querySelector('#ctrl-back');
const ctrlPlay = document.querySelector('#ctrl-play');
const ctrlLoop = document.querySelector('#ctrl-loop');
const ctrlNext = document.querySelector('#ctrl-next');

const volumeSlide = document.querySelector('#volume-slide');
const volumeButtonSmall = document.querySelector('#volume-btn-small');

const easterEggButton = document.querySelector('#easter-egg');
const easterTxt = document.querySelector('#easter-txt');

let easter = 0;

ctrlBack.onclick = function() {
    if (!first) {
        index--;
        if (index < 0) index = musicData.length;
    }
    LoadAudio(index);
}

ctrlPlay.onclick = function() {
    if (!first) {
        alert(playing)
        if (playing == true) {
            alert('hi')
            playing = false;
            player.pauseVideo();
            alert('bye')
        } else {
            playing = true;
            player.playVideo();
        }
    }
}

ctrlLoop.onclick = function() {
    loop = !loop;
    if (loop) {
        ctrlLoop.style.color = 'rgb(128, 128, 128)';
        loopid = index;
    }
    else ctrlLoop.style.color = 'white';
}

ctrlNext.onclick = function() {
    if (!first) {
        index++;
        if (index > musicData.length) index = 0;
    }
    LoadAudio(index);
}

volumeSlide.onchange = function() {
    player.setVolume(parseInt(volumeSlide.value));
}

volumeButtonSmall.onclick = function() {
    volume++;
    if (volume > 10) {
        volume = 0;
    }
    player.setVolume(volume*10);
}

easterEggButton.onclick = function() {
    easter++;
    switch (easter) {
        case 100: alert('Why are you clicking this button'); break;
        case 1000: alert('You are insane.'); break;
        case 10000: alert("Ain't no way."); break;
        case 100000: alert('Autoclicker?'); break;
        case 1000000: alert('Oh nah'); break;
    }
    easterTxt.textContent = easter;
}