import { renderImage } from './js/markup';
import { fetchImage } from './js/api';
import { onRejected, onWarning } from './js/error-handler';

const imageList = document.querySelector(".gallery");
const form = document.querySelector("#searchForm");
const loaderContainer = document.querySelector(".loader");
const loadMore = document.querySelector("#load");
let currentPage = 1;
let query = "";

form.addEventListener("submit", onSearch);
loadMore.addEventListener("click", onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  const keyWord = event.target.keyword.value.trim();
  if (!keyWord) {
    return;
  }
  imageList.innerHTML = '';
  loaderContainer.style.display = 'block';
  query = keyWord;
  currentPage = 1;
  try {
    const images = await fetchImage(query, currentPage);
    if (images.hits.length === 0) {
      loadMore.style.display = 'none';
      onWarning('There are no images matching your search query. Please try again!');
    } else {
      renderImage(images);
      smoothScroll();
      if (images.hits.length < 15) {
        loadMore.style.display = 'none';
        onWarning("We're sorry, but you've reached the end of search results.");
      } else {
        loadMore.style.display = 'block';
      }
    }
    form.reset();
  } catch (error) {
    onRejected(error);
  } finally {
    loaderContainer.style.display = 'none';
  }
}



async function onLoadMore() {
  currentPage += 1;
  loaderContainer.style.display = 'block';
  try {
    const images = await fetchImage(query, currentPage);
    renderImage(images);
    smoothScroll();
    if (currentPage >= Math.ceil(images.totalHits / 15)) {
      onWarning("We're sorry, but you've reached the end of search results.");
      loadMore.style.display = 'none';
    }
  } catch (error) {
    onRejected(error);
  } finally {
    loaderContainer.style.display = 'none';
  }
}


function smoothScroll() {
  const { height } = imageList.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: "smooth",
  });
}