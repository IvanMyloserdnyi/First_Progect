export const commentsCount = {
  min: 2,
  max: 12
}
export const photosUrl = `http://127.0.0.1:4001/photos`
export const commentsUrl = `http://127.0.0.1:4001/comments`
export const picturesSection = document.querySelector('.pictures');
export const bigPicture = document.querySelector('.big-picture');

export const photoTemplate = document.querySelector('#picture');
export const photosFragment = document.createDocumentFragment();

export const body = document.querySelector('.body');
export const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
export const bigPictureImgDescription = document.querySelector('.social__caption');
export const targetLikesCount = document.querySelector('.likes-count');
export const commentsCounter = document.querySelector('.social__comment-count');
export const targetCommentsCount = document.querySelector('.comments-count');
export const commentTemplate = document.querySelector('#social__comment');
export const commentsSection = document.querySelector('.social__comments');
export const commentsFragment = document.createDocumentFragment();

export const uploadPictureSection = document.querySelector('.img-upload__overlay');
export const imgUploadForm = document.querySelector('.img-upload__form');
export const imgUploadDescription = imgUploadForm.querySelector('.text__description');
export const imgUploadHashtags = imgUploadForm.querySelector('.text__hashtags');
export const validationMessages = {
  firstMessage: 'Кількісь хештегів повинно бути не більше 5',
  secondMessage: 'Хештеги повинні бути різними',
  thirdMessage: 'Першим символом має бути #',
  fourthMessage: 'Довжина одного хештега повинна бути менше 20 символів',
  fifthMessage: 'Введіть тільки цифри і букви'
};
export const hashTagsInput = document.querySelector('.text__hashtags');


export const commentsLoader = document.querySelector('.social__comments-loader ');
export  const commentsShown = document.querySelector('.comments-shown');

export const imgUploadButton = document.querySelector('#upload-file');
export const imgUploadSection = document.querySelector('.img-upload__overlay');
export const formSubmitButton = document.querySelector('.img-upload__submit');

