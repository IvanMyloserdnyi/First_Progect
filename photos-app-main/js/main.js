import {createPhotosMarkup} from "./photosMarkup.js";
import {removeBigPicture, showBigPicture} from "./bigPicture.js";
import {
  createPublications, getRandomComments,
  getRandomNumber,
  getServerData,
  getTargetPublication,
  hasDuplicates,
  isValidHashtag
} from "./utils.js";
import {
  bigPicture,
  bigPictureImg,
  bigPictureImgDescription,
  body, commentsCount,
  commentsCounter,
  commentsFragment, commentsLoader,
  commentsSection, commentsShown, commentsUrl,
  commentTemplate, hashTagsInput,
  imgUploadDescription,
  imgUploadForm, imgUploadHashtags,
  photosFragment, photosUrl,
  photoTemplate,
  picturesSection,
  targetCommentsCount,
  targetLikesCount,
  uploadPictureSection, validationMessages
} from "./consts.js";
import {removeUploadPictureSection, addUploadPictureSection} from "./uploadPicture.js";
import {formValidation} from "./validation.js";
import {getPhotosEffects} from "./uploadPictureEffects.js";



const publications = await createPublications(photosUrl,commentsUrl,commentsCount,getRandomComments,getRandomNumber,getServerData)
createPhotosMarkup(publications,photoTemplate,picturesSection,photosFragment)
picturesSection.addEventListener('click',(evt) => {

  const bigOptions = {
    bigPicture,
    body,
    bigPictureImg,
    bigPictureImgDescription,
    targetLikesCount,
    commentsCounter,
    targetCommentsCount,
    commentTemplate,
    commentsSection,
    commentsFragment,
    commentsShown,
    commentsLoader,
    targetPublication: getTargetPublication(evt,publications)
  }
  showBigPicture(evt,bigOptions)
})
//getTargetPublication(evt,publications)??
bigPicture.addEventListener('click',(evt) => removeBigPicture(evt,body,bigPicture,commentsLoader))
document.addEventListener('keydown',(evt) => removeBigPicture(evt,body,bigPicture,commentsLoader))

const imgUploadButton = document.querySelector('#upload-file');
const imgUploadSection = document.querySelector('.img-upload__overlay');
const formSubmitButton = document.querySelector('.img-upload__submit');

imgUploadButton.addEventListener('click',(evt) =>addUploadPictureSection(uploadPictureSection,body));
imgUploadSection.addEventListener('click',(evt) => removeUploadPictureSection(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags));
body.addEventListener('keydown',(evt) => removeUploadPictureSection(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags));
formSubmitButton.addEventListener('click',(evt) =>formValidation(validationMessages,hashTagsInput,hasDuplicates,isValidHashtag))
//['click','keydown'].forEach(e => bigPicture.addEventListener(e,removeBigPicture))
getPhotosEffects()
