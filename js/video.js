const ytAPI = document.createElement('script');
ytAPI.src = "https://youtube.com/iframe_api";
const firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(ytAPI, firstScript);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function PauseVideo() { player.pauseVideo(); }

function PlayVideo() {
    try {
        player.playVideo();
    } catch (err) { }
}

function onPlayerStateChange(e) {
    switch(e.data) {
        case 0:
            if (loop) {
                player.seekTo(0);
                player.playVideo();
            }
            break;
        case 1:
            ctrlPlay.innerHTML = '<i class="fa fa-pause" />';
            break;
        case 2:
            ctrlPlay.innerHTML = '<i class="fa fa-play" />';
            break;
    }
}