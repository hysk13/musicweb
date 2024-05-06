function renderCarousel() {
  setTimeout(() => {
      const songCarousel = document.querySelector('.index-song-carousel');
      songCarousel.innerHTML = '';

      const fragment = document.createDocumentFragment();

      songs.forEach((song, index) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.dataset.index = index;
          const cardImg = document.createElement('img');
          cardImg.className = 'card-img';
          cardImg.src = `https://img.youtube.com/vi/${song.file}/0.jpg`;
          const cardTextDiv = document.createElement('div');
          cardTextDiv.className = 'card-text';
          const cardTitle = document.createElement('p');
          cardTitle.className = 'card-text-title';
          cardTitle.textContent = song.title;
          const cardBy = document.createElement('p');
          cardBy.className = 'card-text-by';
          cardBy.textContent = song.by;
          cardTextDiv.appendChild(cardTitle);
          cardTextDiv.appendChild(cardBy);
          card.appendChild(cardImg);
          card.appendChild(cardTextDiv);
          fragment.appendChild(card);
      });

      songCarousel.appendChild(fragment);
      songCarousel.addEventListener('click', function(event) {
          const card = event.target.closest('.card');
          if (card) {
              const index = parseInt(card.dataset.index);
              loadTrack(index);
          }
      });
  }, 200);
}

function renderHistory() {
  const historyList = document.querySelector('.nav-history-list');
  historyList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  [...history].reverse().forEach((index) => {
      const song = songs[index];
      const historyCard = document.createElement('div');
      historyCard.className = 'nav-history-card';
      const historyCardImg = document.createElement('img');
      historyCardImg.className = 'nav-history-card-img';
      historyCardImg.src = `https://img.youtube.com/vi/${song.file}/0.jpg`;
      const historyCardText = document.createElement('div');
      historyCardText.className = 'nav-history-card-text';
      const historyCardTextTitle = document.createElement('p');
      historyCardTextTitle.className = 'nav-history-card-text-title';
      historyCardTextTitle.textContent = song.title;
      const historyCardTextBy = document.createElement('p');
      historyCardTextBy.className = 'nav-history-card-text-by';
      historyCardTextBy.textContent = song.by;
      historyCardText.appendChild(historyCardTextTitle);
      historyCardText.appendChild(historyCardTextBy);
      historyCard.appendChild(historyCardImg);
      historyCard.appendChild(historyCardText);
      fragment.appendChild(historyCard);
  });

  historyList.appendChild(fragment);
  historyList.addEventListener('click', function(event) {
      const card = event.target.closest('.nav-history-card');
      if (card) {
          const index = [...history].reverse()[card.parentNode.children.length - card.rowIndex - 1];
          loadTrack(index);
      }
  });
}

function render() {
  const pageSize = (window.innerWidth > 1000) ? (window.innerWidth - 350) / window.innerWidth * 100 + "%" : "";
  const navHeight = (((window.innerHeight * 0.99) - 390) / (window.innerHeight * 0.99)) * 100 + '%';

  document.documentElement.style.setProperty('--page-size', pageSize);
  document.documentElement.style.setProperty('--nav-height', navHeight);
}

window.onload = function() {
  renderCarousel();
  render();
};
window.onresize = render;