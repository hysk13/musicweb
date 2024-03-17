// render.js - a JavaScript file rendering the components

const allCatalog = document.querySelector('#mainweb-allcatalog');
const playBar = document.querySelector('#play-bar');
const playerThumb = document.querySelector('#players-img');
const playerTitle = document.querySelector('#playing-title');
const playerBy = document.querySelector('#playing-by');

function CreateCard(id) {
    const cardWrap = document.createElement('div');
    cardWrap.className = 'cardWrap';
    cardWrap.onclick = function() {
        LoadAudio(musicData[id].id);
    }
    const cardThumb = document.createElement('img');
    cardThumb.className = 'cardThumb';
    cardThumb.src = `https://img.youtube.com/vi/${musicData[id]['file']}/0.jpg`;
    const cardTextWrap = document.createElement('div');
    cardTextWrap.className = 'cardTextWrap';
    const cardTitle = document.createElement('p');
    cardTitle.className = 'cardTitle';
    cardTitle.textContent = musicData[id]['title'];
    const cardBy = document.createElement('p');
    cardBy.style.color = musicData[id]['by-color'];
    cardBy.className = 'cardBy';
    cardBy.textContent = musicData[id]['by'];
    return [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy];
}

function RenderCatalog(data) {
    data = data || musicData;
    let columns = [];
    allCatalog.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const regulation = [200, 900, 1330]
        const blueprint = {
            0 : ['catalog-col', 'col-one'],
            1 : ['catalog-col', 'col-two'],
            2 : ['catalog-col', 'col-three'],
        }
        if (window.innerWidth > regulation[i]) {
            const newCol = document.createElement('div');
            newCol.className = blueprint[i][0];
            newCol.id = blueprint[i][1];
            allCatalog.appendChild(newCol);
            columns.push(newCol);
        }
    }
    for (let i = 0; i < musicData.length; i++) {
        const [cardWrap, cardThumb, cardTextWrap, cardTitle, cardBy] = CreateCard(i, musicData, 'cardWrap');
        cardTextWrap.appendChild(cardTitle);
        cardTextWrap.appendChild(cardBy);
        cardWrap.appendChild(cardThumb);
        cardWrap.appendChild(cardTextWrap);
        columns[i%columns.length].appendChild(cardWrap);
    }
}