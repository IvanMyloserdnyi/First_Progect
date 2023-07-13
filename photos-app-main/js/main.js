import {createPhotosMarkup} from "./photosMarkup.js";
import {removeBigPicture, showBigPicture} from "./bigPicture.js";
import {
  createPublications, getRandomComments,
  getRandomNumber,
  getServerData,
  getTargetPublication,
  hasDuplicates,
  isValidHashtag, removeMarkup
} from "./utils.js";
import {
  bigPicture,
  bigPictureImg,
  bigPictureImgDescription,
  body, commentsCount,
  commentsCounter,
  commentsFragment, commentsLoader,
  commentsSection, commentsShown, commentsUrl,
  commentTemplate, formSubmitButton, hashTagsInput, imgUploadButton,
  imgUploadDescription,
  imgUploadForm, imgUploadHashtags, imgUploadSection,
  photosFragment, photosUrl,
  photoTemplate,
  picturesSection,
  targetCommentsCount,
  targetLikesCount,
  uploadPictureSection, validationMessages
} from "./consts.js";
import {removeUploadPictureSection, addUploadPictureSection} from "./uploadPictureSection.js";
import {formValidation} from "./validation.js";
import {getPhotosEffects, resetPictureFilter} from "./uploadPictureEffects.js";
import {getUploadPhoto} from "./uploadPhoto.js";
import {imgFilters} from "./imgFilters.js";



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
    targetPublication: getTargetPublication(evt,publications),
    removeMarkup
  }
  showBigPicture(evt,bigOptions)
})
//getTargetPublication(evt,publications)??
bigPicture.addEventListener('click',(evt) => removeBigPicture(evt,body,bigPicture,commentsLoader))
document.addEventListener('keydown',(evt) => removeBigPicture(evt,body,bigPicture,commentsLoader))
imgUploadButton.addEventListener('click',() =>addUploadPictureSection(uploadPictureSection,body));

imgUploadSection.addEventListener('click',(evt) => removeUploadPictureSection(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags,resetPictureFilter));
body.addEventListener('keydown',(evt) => removeUploadPictureSection(evt,uploadPictureSection,body,imgUploadForm,imgUploadDescription,imgUploadHashtags,resetPictureFilter));


imgUploadForm.addEventListener("submit", e => {
  e.preventDefault();
  resetPictureFilter()
  imgUploadForm.reset()
})
formSubmitButton.addEventListener('click',async () =>{
  formValidation(validationMessages,hashTagsInput,hasDuplicates,isValidHashtag)
  imgUploadSection.classList.add('hidden')
})
//['click','keydown'].forEach(e => bigPicture.addEventListener(e,removeBigPicture))
getPhotosEffects()



const uploadFile = document.querySelector('#upload-file')
uploadFile.addEventListener('change', async (evt) => {
  getUploadPhoto(evt)
});



imgFilters(publications,createPhotosMarkup,photoTemplate,picturesSection,photosFragment,removeMarkup)

/*function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function saveInput(){
  console.log('AAAAAAAAAAAAAA');
}
debounce(() => saveInput(),500);*/
