const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let history = [];
let player;
let audioPlaying = false;
let audioLoop = false;
let beginTime = 0;
let endTime = 10000;

const playerImg = document.querySelector('#track-info-img');
const playerName = document.querySelector('#track-info-title');
const playerBy = document.querySelector('#track-info-by');
const ctrlBack = document.querySelector('#ctrl-back');
const ctrlPlay = document.querySelector('#ctrl-play');
const ctrlLoop = document.querySelector('#ctrl-loop');
const ctrlNext = document.querySelector('#ctrl-next');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const favicon = document.querySelector('#favicon');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
  });
}

function onPlayerStateChange(e) {
    switch (e.data) {
        case 0:
            if (audioLoop) {
                player.seekTo(beginTime);
                player.playVideo();
            } else {
                audioPlaying = false;
            }
            break;
        case 1:
            audioPlaying = true;
            break;
        case 3:
            audioPlaying = true;
            break;
    }
}

ctrlBack.addEventListener('click', () => {
    const skipTo = player.getCurrentTime() - 5;
    player.seekTo(skipTo > beginTime ? skipTo : beginTime);
});

ctrlPlay.addEventListener('click', () => {
    audioPlaying = !audioPlaying;
    ctrlPlay.innerHTML = `<i class="fa fa-${audioPlaying ? "pause" : "play"}"></i>`;
    audioPlaying ? player.playVideo() : player.pauseVideo();
});

ctrlLoop.addEventListener('click', () => {
    audioLoop = !audioLoop;
    ctrlLoop.style.color = audioLoop ? "#fff" : darkMode ? "#ccc" : "#000";
});

ctrlNext.addEventListener('click', () => {
    const skipTo = player.getCurrentTime() + 5;
    player.seekTo(skipTo < endTime ? skipTo : endTime);
});

function loadTrack(trackId) {
    audioPlaying = true;
    history.push(trackId);
    if (history.length > 5) history.shift();
    renderHistory();
    const song = songs[trackId];
    document.title = `Playing ${song.title}...`;
    favicon.href = `https://img.youtube.com/vi/${song.file}/0.jpg`;
    beginTime = song.time[0];
    endTime = song.time[1];
    player.loadVideoById(song.file);
    setTimeout(() => {
        player.seekTo(beginTime || 0);
    }, 500);
    playerImg.src = `https://img.youtube.com/vi/${song.file}/0.jpg`;
    playerName.textContent = song.title;
    playerBy.textContent = song.by;
    ctrlPlay.innerHTML = `<i class="fa fa-pause"></i>`;
}

function updateProgressBar() {
    try {
        if (audioPlaying) {
            const currentTime = player.getCurrentTime();
            progress.style.width = (((currentTime - beginTime) / (endTime || player.getDuration())) * 100) + '%';
            console.log(progress.style.width)
            if (currentTime >= (endTime || player.getDuration())) {
                if (audioLoop) {
                    player.seekTo(beginTime);
                    player.playVideo();
                } else {
                    player.pauseVideo();
                }
            }
        }
    } catch (err) { }
}

setInterval(updateProgressBar, 1000);

progressBar.addEventListener('click', (e) => {
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const seekTime = (clickX / progressBarWidth) * (endTime || player.getDuration()) + beginTime;
    player.seekTo(seekTime);
});