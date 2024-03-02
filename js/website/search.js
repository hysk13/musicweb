// search.js - a JavaScript file handling searching

const searchTxt = document.querySelector('#search-txt');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    let data = [];
    const search = searchTxt.value.trim().toLowerCase();
    for (let i = 0; i < musicData.length; i++) {
        if ((musicData[i]['title'].trim().toLowerCase()).includes(search) || (musicData[i]['by'].trim().toLowerCase()).includes(search)) {
            console.log('hi')
            data.push(musicData[i]);
        }
    }
    RenderCatalog(data);
}