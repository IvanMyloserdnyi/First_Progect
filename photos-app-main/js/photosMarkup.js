
export function createPhotosMarkup(postsObg,photoTemplate,picturesSection,photosFragment) {
  postsObg.forEach((post) => {
    let clonedPhotoTemplate = photoTemplate.content.cloneNode(true);
    clonedPhotoTemplate.querySelector('.picture__img').src = post.url;
    clonedPhotoTemplate.querySelector('.picture__img').setAttribute('data-id',post.id);
    clonedPhotoTemplate.querySelector('.picture__comments').innerText = post.comments.length
    clonedPhotoTemplate.querySelector('.picture__likes').innerText = post.likes
    photosFragment.appendChild(clonedPhotoTemplate)
  })
  picturesSection.appendChild(photosFragment)
}

