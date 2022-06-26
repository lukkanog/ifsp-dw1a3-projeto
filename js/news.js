let newsAmountToDisplay = 8;
const news = Array.from(document.getElementsByClassName('news-item'))
const loadNewsButton = document.getElementById('load-news-button');

const showNews = () => {
  news.forEach((item, index) => {
    if (index < newsAmountToDisplay) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    } 
  });
}

showNews();

loadNewsButton.addEventListener('click', () => {
  newsAmountToDisplay += 8;
  showNews();

  if (newsAmountToDisplay >= news.length) {
    loadNewsButton.style.display = 'none';
  }
});
