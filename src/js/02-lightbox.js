import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function createGallery() {
    const imgs = [];
    galleryItems.forEach(event => {
      const { preview, original, description } = event;
      const item = document.createElement("a");
      item.classList.add("gallery__item");
      item.href = `${original}`;
      imgs.push(item);
      const img = document.createElement("img");
      img.classList.add("gallery__image");
      img.src = `${preview}`;
      img.dataset.source = `${original}`;
      img.alt = `${description}`;
      item.append(img);
    });
    gallery.append(...imgs);
  }
createGallery();

gallery.addEventListener("click", galleryF)

function galleryF(e) {
    e.preventDefault();
    if (e.target.tagName ==! "IMG") {
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: "250"
    });
    
}
