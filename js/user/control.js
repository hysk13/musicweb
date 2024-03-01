//control.js - a JavaScript file handling the control buttons of the website

ctrlBack.onclick = function() {
    if (!first) {
        index--;
        if (index < 0) index = musicData.length;
    }
    LoadAudio(index);
}

ctrlPlay.onclick = function() {
    if (!first) {
        if (playing) PauseAudio();
        else PlayAudio();
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
        case 100: alert('Why are you clicking this button');
        case 1000: alert('You are insane.');
        case 10000: alert("Ain't no way.");
        case 100000: alert('Autoclicker?');
        case 1000000: alert('Oh nah');
    }
    easterTxt.textContent = easter;
}