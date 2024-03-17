// progress.js - a JavaScript file handling the progress bar

const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

// Source: https://www.youtube.com/watch?v=goaDRak0_7Q
setInterval(() => {
    try {
        if (playing) progress.style.width = ((player.getCurrentTime() / (playerEnd-playerStart))*100).toString() + '%';
        if (player.getCurrentTime() >= playerEnd && loop) {
            player.seekTo(playerStart);
            player.playVideo();
        }
    } catch (err) { }
}, 1000);

progressBar.addEventListener('click', (e) => {
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const seekTime = (clickX / progressBarWidth) * playerEnd;
    player.seekTo(seekTime);
});