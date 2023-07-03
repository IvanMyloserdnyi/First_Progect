
export function showBigPicture(evt,data) {
  const {
    bigPicture,body,bigPictureImg,bigPictureImgDescription,
    targetLikesCount,commentsCounter,targetCommentsCount,commentTemplate,
    commentsSection,commentsFragment,targetPublication,commentsShown,commentsLoader
  }=data
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open')
    bigPictureImg.src = targetPublication.url;
    bigPictureImgDescription.innerText = targetPublication.description;
    targetLikesCount.innerText = targetPublication.likes;
    commentsCounter.classList.add('hidden');
    targetCommentsCount.innerText = targetPublication.comments.length;
    showComments(targetPublication,commentsCounter,commentTemplate,commentsSection,commentsFragment,commentsShown,commentsLoader)
  }
}
function showComments(targetPublication,commentsCounter,commentTemplate,commentsSection,commentsFragment,commentsShown,commentsLoader) {
  const comments = targetPublication.comments;
  if(comments.length>5) {
    commentsCounter.classList.remove('hidden');
    let range = 5
    commentsLoader.addEventListener('click', () =>{
      range +=5
      createCommentsMarkup(comments.slice(0,range),commentTemplate,commentsSection,commentsFragment,commentsShown);
      if (range >= comments.length) {
        commentsLoader.classList.add('hidden')
      }
    })
    createCommentsMarkup(comments.slice(0,range),commentTemplate,commentsSection,commentsFragment,commentsShown)
  }
  else {
    createCommentsMarkup(targetPublication.comments,commentTemplate,commentsSection,commentsFragment,commentsShown)
    commentsLoader.classList.add('hidden')
  }
}
function removeCommentsLoader(commentsLoader) {
  if(commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden')
  }
}
export function createCommentsMarkup(commentsObg,commentTemplate,commentsSection,commentsFragment,commentsShown) {
  commentsShown.textContent = commentsObg.length
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

export function removeBigPicture(evt,body,bigPicture,commentsLoader) {
  if (evt.target.id === 'picture-cancel') {
    body.classList.remove('modal-open')
    bigPicture.classList.add('hidden')
    removeCommentsLoader(commentsLoader)
  }
  else   if (evt.key==='Escape'&&bigPicture.className === 'big-picture overlay') {
    bigPicture.classList.add('hidden')
    removeCommentsLoader(commentsLoader)
  }
}

