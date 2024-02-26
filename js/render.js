const devRecommendList = document.querySelector('#dev-choice-catalog');
const randomTrack = document.querySelector('#mainweb-randcatalog-content');
const allTrack = document.querySelector('#mainweb-allcatalog-content');
const playBar = document.querySelector('#play-bar');
const playerThumb = document.querySelector('#players-img');
const playerTitle = document.querySelector('#playing-title');
const playerBy = document.querySelector('#playing-by');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const ctrlBack = document.querySelector('#ctrl-back');
const ctrlPlay = document.querySelector('#ctrl-play');
const ctrlLoop = document.querySelector('#ctrl-loop');
const ctrlNext = document.querySelector('#ctrl-next');
const volumeSlide = document.querySelector('#volume-slide');

let first = true;
let loop = false;
let loopID = 0;
let playing = false;
let index = 0;

// https://www.youtube.com/watch?v=goaDRak0_7Q
setInterval(() => {
    if (playing) progress.style.width = (player.getCurrentTime() / player.getDuration())*100+"%";
}, 1000);

progressBar.addEventListener('click', (e) => {
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const seekTime = (clickX / progressBarWidth) * player.getDuration();
    player.seekTo(seekTime);
});

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

function CreateBasicCard(id, data, wrapClass) {
    const cardWrap = document.createElement('div');
    cardWrap.className = wrapClass;
    cardWrap.onclick = function() { LoadAudio(musicData[id].id); }
    const cardThumb = document.createElement('img');
    cardThumb.className = 'cardThumb';
    cardThumb.src = `https://img.youtube.com/vi/${data[id]['file']}/0.jpg`;
    const cardTextWrap = document.createElement('div');
    cardTextWrap.className = 'cardTextWrap';
    const cardTitle = document.createElement('p');
    cardTitle.className = 'cardTitle';
    cardTitle.textContent = data[id]['title'];
    const cardBy = document.createElement('p');
    cardBy.style.color = data[id]['by-color'];
    cardBy.className = 'cardBy';
    cardBy.textContent = data[id]['by'];
    return [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy];
}

function RenderCatalog() {
    let data;
    devRecommendList.innerHTML = '';
    data = [...devMusic];
    for (let i = 0; i < devMusic.length; i++) {
        const [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy] = CreateBasicCard(devMusic[i].id, musicData, 'sqrCardWrap');
        cardTextWrap.appendChild(cardTitle);
        cardTextWrap.appendChild(cardBy);
        cardWrap.appendChild(cardThumb);
        cardWrap.appendChild(cardTextWrap);
        devRecommendList.appendChild(cardWrap);
    }
    randomTrack.innerHTML = '';
    let taken = [];
    data = [...musicData];
    for (let i = 0; i < 4; i++) {
        while (true) {
            const selectID = Math.floor(Math.random()*data.length);
            if (!taken.includes(selectID)) {
                const [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy] = CreateBasicCard(selectID, data, 'horCardWrap');
                cardTextWrap.appendChild(cardTitle);
                cardTextWrap.appendChild(cardBy);
                cardWrap.appendChild(cardThumb);
                cardWrap.appendChild(cardTextWrap);
                randomTrack.appendChild(cardWrap);
                taken.push(selectID);
                break;
            }
        }
    }
    allTrack.innerHTML = '';
    data = [...musicData];
    for (let i = 0; i < musicData.length; i++) {
        const [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy] = CreateBasicCard(i, data, 'horCardWrap');
        cardTextWrap.appendChild(cardTitle);
        cardTextWrap.appendChild(cardBy);
        cardWrap.appendChild(cardThumb);
        cardWrap.appendChild(cardTextWrap);
        allTrack.appendChild(cardWrap);
    }
}

function LoadAudio(id) {
    index = id;
    playing = true;
    if (loop && id != loopID) LoopOff();
    if (first) first = false;
    player.loadVideoById(musicData[index]['file']);
    LoadPlayer(id)
    PlayVideo();
}

function LoadPlayer(id) {
    playerThumb.src = `https://img.youtube.com/vi/${musicData[id]['file']}/0.jpg`;
    playerTitle.textContent = musicData[id]['title'];
    playerBy.textContent = musicData[id]['by'];
    playerBy.style.color = musicData[id]['by-color'];
}

function LoopOn() {
    loop = true;
    ctrlLoop.style.color = 'rgb(128, 128, 128)'
}

function LoopOff() {
    loop = false;
    ctrlLoop.style.color = 'white';
}

function PlayAudio() {
    playing = true;
    ctrlPlay.innerHTML = '<i class="fa fa-pause" />';
    PlayVideo();
}

function PauseAudio() {
    playing = false;
    ctrlPlay.innerHTML = '<i class="fa fa-play" />';
    PauseVideo();
}

RenderCatalog();