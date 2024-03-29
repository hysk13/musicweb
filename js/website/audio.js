// audio.js - a JavaScript file handling YouTube API calls

const ytAPI = document.createElement('script');
ytAPI.src = "https://youtube.com/iframe_api";
const firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(ytAPI, firstScript);

let player;
function onYouTubeIframeAPIReady() {
    const playerWrap = document.querySelector('#player-wrap');
    playerWrap.style.display = 'none';
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            'rel': 0,
            'fs': 0,
        },
        events: {
            'onReady': function(e) {
                e.target.playVideo();
            },
            'onStateChange': function onPlayerStateChange(e) {
                switch(e.data) {
                    case 0:
                        if (loop) {
                            player.seekTo(playerStart);
                            player.playVideo();
                        }
                        break;
                    case 1:
                        ctrlPlay.innerHTML = '<i class="fa fa-pause" />';
                        playing = true;
                        playerWrap.style.display = 'flex';
                        if (player.getCurrentTime() < playerStart) player.seekTo(playerStart);
                        break;
                    case 2:
                        ctrlPlay.innerHTML = '<i class="fa fa-play" />';
                        playing = false;
                        playerWrap.style.display = 'none';
                        break;
                }
            },
        }
    });
}

document.addEventListener('visibilitychange', function() {
    if (playing) player.playVideo();
})