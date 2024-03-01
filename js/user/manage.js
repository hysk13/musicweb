// manage.js - a JavaScript file managing the audios and user interactions

function LoadAudio(id) {
    index = id;
    playing = true;
    if (loop && id != loopID) {
        loop = false;
        ctrlLoop.style.color = 'white';
    };
    if (first) first = false;
    player.loadVideoById(musicData[index]['file']);
    LoadPlayer(id)
}

function LoadPlayer(id) {
    playerThumb.src = `https://img.youtube.com/vi/${musicData[id]['file']}/0.jpg`;
    playerTitle.textContent = musicData[id]['title'];
    playerBy.textContent = musicData[id]['by'];
    playerBy.style.color = musicData[id]['by-color'];
}

function PlayAudio() {
    playing = true;
    ctrlPlay.innerHTML = '<i class="fa fa-pause" />';
}

function PauseAudio() {
    playing = false;
    ctrlPlay.innerHTML = '<i class="fa fa-play" />';
}