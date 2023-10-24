import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');

// 1. Створити розмітку 
function createGalleryCard(arr) {
    return arr.reduce(((acc, { preview, original, description }) => {
      return  acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    }), '');
}

gallery.innerHTML = createGalleryCard(galleryItems);
// 2. Підключаємо бібліотеку, в додаткових параметрах вказуємо затримку
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
