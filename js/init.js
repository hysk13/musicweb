// init.js - a wrapper JavaScript file containing constants.

const allCatalog = document.querySelector('#mainweb-allcatalog');
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
const volumeButtonSmall = document.querySelector('#volume-btn-small');
const theme = document.querySelector('#app-theme');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeSmall = document.querySelector('#toggle-theme-small');
const html = document.querySelector('#html');
const webWrap = document.querySelector('#website-wrap');
const easterEggButton = document.querySelector('#easter-egg');
const easterTxt = document.querySelector('#easter-txt');

const musicData = [
    {
        "title": "First Kiss and My Heart is 120BPM",
        "by": "Kyoung Seo",
        "file": "ijfnkGDLM1g",
        "by-color": "purple",
        id: 0,
    }, 
    {
        "title": "Ongoing",
        "by": "Kyoung Seo",
        "file": "GArleOgvtjs",
        "by-color": "purple",
        id: 1,
    }, 
    {
        "title": "Dear My X",
        "by": "Kyoung Seo",
        "file": "S1JB_T6Fths",
        "by-color": "purple",
        id: 2,
    },
    {
        "title": "Love Actually",
        "by": "Daybreak + Sunnyhill",
        "file": "MStMdxnrYyY",
        "by-color": "orange",
        id: 3,
    },
    {
        "title": "Discord",
        "by": "QWER",
        "file": "WGm2HmXeeRI",
        "by-color": "skyblue",
        id: 4,
    }, 
    {
        "title": "Secret Diary",
        "by": "QWER",
        "file": "MPK7oP1--4s",
        "by-color": "skyblue",
        id: 5,
    }, 
    {
        "title": "Harmony of Stars",
        "by": "QWER",
        "file": "On6Pm4M-dQQ",
        "by-color": "skyblue",
        id: 6,
    },
    {
        "title": "Your Shampoo Scent in the Flowers",
        "thumb": "_pcl_JPqMfw",
        "by": "Jang Bum Joon",
        "file": "ToUcHgWT8i0",
        "by-color": "brown",
        id: 7,
    },
    {
        "title": "HoRangPungRyuGa",
        "by": "SangRokSu (feat Narae)",
        "file": "fBQhY7tfx4k",
        "by-color": "pink",
        id: 8,
    },
    {
        "title": "Geu ShiJeol",
        "by": "Hitchhiking Dolphins",
        "file": "8C5N4geJGX0",
        "by-color": "blue",
        id: 9,
    },
    {
        "title": "Journey to Atlantis",
        "thumb": "m0o7fbNKhpM",
        "by": "La Boum",
        "file": "BkN-ZOZIy2o",
        "by-color": "lightblue",
        id: 10,
    },
    {
        "title": "Me Gustas Tu",
        "by": "GFriends",
        "file": "oixRBiOteWY",
        "by-color": "magenta",
        id: 11,
    },
    {
        "title": "Rough",
        "by": "GFriends",
        "file": "RSh5akaaHXk",
        "by-color": "magenta",
        id: 12,
    },
];

let dark = true;
let first = true;
let loop = false;
let loopID = 0;
let playing = false;
let index = 0;
let volume = 0;
let easter = 0;