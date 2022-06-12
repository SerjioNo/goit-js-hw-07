import { galleryItems } from './gallery-items.js';
// Change code below this line



//const imegesContainer = document.querySelector('.gallery');

const imegesContainer = document.querySelector('.gallery');

const onGalleryItem = galleryItems.map(({ preview, description, original }) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" 
alt="${description}"/>
</a>`).join("");

imegesContainer.insertAdjacentHTML("beforeend", onGalleryItem);


var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250 });


