
export function showBigPicture(evt,targetPublication,bigPicture,body,bigPictureImg,bigPictureImgDescription,targetLikesCount,commentsCounter,targetCommentsCount,commentTemplate,commentsSection,commentsFragment) {
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open')
    bigPictureImg.src = targetPublication.url;
    bigPictureImgDescription.innerText = targetPublication.description;
    targetLikesCount.innerText = targetPublication.likes;
    commentsCounter.classList.add('hidden');
    targetCommentsCount.innerText = targetPublication.comments.length;
    createCommentsMarkup(targetPublication.comments,commentTemplate,commentsSection,commentsFragment)
  }
  else {
    alert('Help')
  }
}

export function createCommentsMarkup(commentsObg,commentTemplate,commentsSection,commentsFragment) {
  while (commentsSection.firstChild) {
    commentsSection.removeChild(commentsSection.firstChild);
  }
  commentsObg.forEach(comment => {
    const clonedCommentTemplate = commentTemplate.content.cloneNode(true);
    clonedCommentTemplate.querySelector('.social__picture').src = comment.avatar;
    clonedCommentTemplate.querySelector('.social__author').innerText = comment.name;
    clonedCommentTemplate.querySelector('.social__text').innerText = comment.message;
    commentsFragment.appendChild(clonedCommentTemplate);
  })
  commentsSection.appendChild(commentsFragment);
}

export function removeBigPicture(evt,body,bigPicture) {
  if (evt.target.id === 'picture-cancel') {
    body.classList.remove('modal-open')
    bigPicture.classList.add('hidden')
  }
  else   if (evt.key==='Escape'&&bigPicture.className === 'big-picture overlay') {
    bigPicture.classList.add('hidden')
  }
}

