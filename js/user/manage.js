// manage.js - a JavaScript file managing the audios and user interactions

let first = true;
let loop = false;
let loopID = 0;
let playing = false;
let index = 0;
let volume = 0;

let playerStart = 0;
let playerEnd = 0;

function LoadAudio(id) {
    index = id;
    playing = true;
    if (loop && id != loopID) {
        loop = false;
        ctrlLoop.style.color = 'white';
    };
    if (first) first = false;
    player.loadVideoById(musicData[index]['file']);
    if (musicData[index]['start'] != undefined) playerStart = musicData[index]['start'];
    else playerStart = 0;
    if (musicData[index]['end'] != undefined) playerEnd = musicData[index]['end'];
    else playerEnd = player.getDuration();
    player.seekTo(playerStart)
    LoadPlayer(id);
}

function LoadPlayer(id) {
    if (musicData[id]['thumb'] == undefined) playerThumb.src = `https://img.youtube.com/vi/${musicData[id]['file']}/0.jpg`;
    else playerThumb.src = `https://img.youtube.com/vi/${musicData[id]['thumb']}/0.jpg`;
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