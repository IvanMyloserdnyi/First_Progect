import {createPhotosMarkup} from "./photosMarkup.js";
import {removeBigPicture, showBigPicture} from "./bigPicture.js";
import {getTargetPublication, hasDuplicates, isValidHashtag} from "./utils.js";
import {
  bigPicture,
  bigPictureImg,
  bigPictureImgDescription,
  body,
  commentsCounter,
  commentsFragment,
  commentsSection,
  commentTemplate, hashTagsInput,
  imgUploadDescription,
  imgUploadForm, imgUploadHashtags,
  photosFragment,
  photoTemplate,
  picturesSection,
  publications,
  targetCommentsCount,
  targetLikesCount,
  uploadPictureSection, validationMessages
} from "./consts.js";
import {uploadPictureSectionClose, uploadPictureSectionOpen} from "./uploadPicture.js";
import {formValidation} from "./validation.js";

createPhotosMarkup(publications,photoTemplate,picturesSection,photosFragment)
picturesSection.addEventListener('click',(evt) => {
  showBigPicture(evt,getTargetPublication(evt,publications),bigPicture,body,bigPictureImg,bigPictureImgDescription,targetLikesCount,commentsCounter,targetCommentsCount,commentTemplate,commentsSection,commentsFragment)
})
//getTargetPublication(evt,publications)??
bigPicture.addEventListener('click',(evt) => removeBigPicture(evt,body,bigPicture))
document.addEventListener('keydown',(evt) => removeBigPicture(evt,body,bigPicture))

const imgUploadButton = document.querySelector('#upload-file');
const imgUploadSection = document.querySelector('.img-upload__overlay');
const formSubmitButton = document.querySelector('.img-upload__submit');

imgUploadButton.addEventListener('click',(evt) =>uploadPictureSectionOpen(uploadPictureSection,body));
imgUploadSection.addEventListener('click',(evt) => uploadPictureSectionClose(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags));
body.addEventListener('keydown',(evt) => uploadPictureSectionClose(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags));
formSubmitButton.addEventListener('click',(evt) =>formValidation(validationMessages,hashTagsInput,hasDuplicates,isValidHashtag))
//['click','keydown'].forEach(e => bigPicture.addEventListener(e,removeBigPicture))
