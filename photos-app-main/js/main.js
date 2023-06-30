import {createPhotosMarkup} from "./photosMarkup.js";
import {removeBigPicture, showBigPicture} from "./bigPicture.js";
import {getTargetPublication} from "./utils.js";
import {
  bigPicture, bigPictureImg,
  bigPictureImgDescription, body, commentsCounter, commentsFragment, commentsSection, commentTemplate,
  photosFragment,
  photoTemplate,
  picturesSection,
  publications, targetCommentsCount, targetLikesCount
} from "./consts.js";

createPhotosMarkup(publications,photoTemplate,picturesSection,photosFragment)
picturesSection.addEventListener('click',(evt) => {
  showBigPicture(evt,getTargetPublication(evt,publications),bigPicture,body,bigPictureImg,bigPictureImgDescription,targetLikesCount,commentsCounter,targetCommentsCount,commentTemplate,commentsSection,commentsFragment)
})
bigPicture.addEventListener('click',(evt) => removeBigPicture(evt,body,bigPicture))
document.addEventListener('keydown',(evt) => removeBigPicture(evt,body,bigPicture))


//['click','keydown'].forEach(e => bigPicture.addEventListener(e,removeBigPicture))
