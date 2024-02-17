import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { onWarning } from "./error-handler";
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
const imageList = document.querySelector(".gallery");


export function renderImage({ totalHits, hits }) {
  if (parseInt(totalHits) > 0) {
    const markup = hits.map(createElementGallery).join('');
    imageList.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
  } else {
    imageList.innerHTML = '';
    onWarning('there are no images matching your search query. Please try again!');
  }
}

function createElementGallery({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${likes}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Views</p>
        <p>${views}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Comments</p>
        <p>${comments}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Downloads</p>
        <p>${downloads}</p>
      </li>
    </ul>
  </li>
  `;
}