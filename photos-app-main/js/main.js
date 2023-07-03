import {createPhotosMarkup} from "./photosMarkup.js";
import {removeBigPicture, showBigPicture} from "./bigPicture.js";
import {getServerData, getTargetPublication, hasDuplicates, isValidHashtag} from "./utils.js";
import {
  bigPicture,
  bigPictureImg,
  bigPictureImgDescription,
  body,
  commentsCounter,
  commentsFragment, commentsLoader,
  commentsSection, commentsShown,
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
import {removeUploadPictureSection, addUploadPictureSection} from "./uploadPicture.js";
import {formValidation} from "./validation.js";


const photosUrl = `http://127.0.0.1:4001/photos`
const photos = await getServerData(photosUrl)
createPhotosMarkup(photos,photoTemplate,picturesSection,photosFragment)
const commentsUrl = `http://127.0.0.1:4001/comments`
const comments = await getServerData(commentsUrl)
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
    targetPublication: getTargetPublication(evt,comments),
    commentsShown,
    commentsLoader
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
