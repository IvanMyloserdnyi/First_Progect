

export function showBigPicture(evt,data) {
  const {
    bigPicture,body,bigPictureImg,bigPictureImgDescription,
    targetLikesCount,commentsCounter,targetCommentsCount,commentTemplate,
    commentsSection,commentsFragment,targetPublication,commentsShown,commentsLoader,removeMarkup
  }=data
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open')
    bigPictureImg.src = targetPublication.url;
    bigPictureImgDescription.innerText = targetPublication.description;
    targetLikesCount.innerText = targetPublication.likes;
    targetCommentsCount.innerText = targetPublication.comments.length;
    showComments(targetPublication,commentsCounter,commentTemplate,commentsSection,commentsFragment,commentsShown,commentsLoader,removeMarkup)
  }
}
function showComments(targetPublication,commentsCounter,commentTemplate,commentsSection,commentsFragment,commentsShown,commentsLoader,removeMarkup) {
  const comments = targetPublication.comments;
  let range = 5

  if(comments.length>5) {
    commentsLoader.addEventListener('click', () =>{
      range +=5;
      createCommentsMarkup(comments.slice(0,range),commentTemplate,commentsSection,commentsFragment,commentsShown,removeMarkup);
      if (range >= comments.length) {
        commentsLoader.classList.add('hidden')
        range = 5
      }
    })
    createCommentsMarkup(comments.slice(0,range),commentTemplate,commentsSection,commentsFragment,commentsShown,removeMarkup)
  }
  else {
    commentsCounter.classList.add('hidden');
    commentsLoader.classList.add('hidden')
    createCommentsMarkup(targetPublication.comments,commentTemplate,commentsSection,commentsFragment,commentsShown,removeMarkup)
  }
}
function removeCommentsLoader(commentsLoader) {
  if(commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden')
  }
}
export function createCommentsMarkup(commentsObg,commentTemplate,commentsSection,commentsFragment,commentsShown,removeMarkup) {
  commentsShown.textContent = commentsObg.length
  removeMarkup(commentsSection)
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

