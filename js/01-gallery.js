import { galleryItems } from './gallery-items.js';
// Change code below this line


const imegesContainer = document.querySelector('.gallery');

const onGalleryItem = galleryItems.map(({ preview, description, original }) =>
`<div class='gallery__item'>
<a class='gallery__link' href='${original}'>
<img class='gallery__image' src='${preview}'
data-source='${original}' alt='${description}'/>
</a></div>`).join("");

imegesContainer.insertAdjacentHTML("beforeend", onGalleryItem);

imegesContainer.addEventListener('click', onPictureClick);

function onPictureClick(evt) {

    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }
        const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"
        width="800" height="600">`);
        instance.show();

        window.addEventListener('keyup', onCloseModal);

function onCloseModal(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
}
}