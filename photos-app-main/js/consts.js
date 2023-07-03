import {createComments, getRandomNumber} from "./utils.js";

export const descriptions = [
  'Хто зна коли вже в крипті бичка почнеться? пишіть в лс!',
  'Огооо!це шо за фільтр',
  'Краще б котіка своткав)',
  'Мур))',
  'АВТАМАБІІІЛЬ!!!',
  'Хто мені почеше спинку?)',
  'Йомайо!!вот єто тєєма!!',
  'Коли я був малим мені батя на голову вронив ключ на 47:(',
  'СТАВКИНАСПОРТ!',
  'Всьо з тобой понятно',
  'Го брити хомяків!',
  'Хто мен пояснить в чому тут смисол?',
  'Куплю біток по 15,пишіть',
  'LIKE A BOSS',
  'GussiGang',
  'У всіх є корєш якого тягне на пригоди?',
  'Хто відповість в чому прикол відправлю морозиво!',
  'І таке буває)',
  'В дитинстві мріяв бути космонавтом)',
  'Зацініть яка перспектива!',
  'Вдома в лузі паслись гусі)',
  'Бро чекни закрЄп!',
  'Це мій корЄфанчик!!',
  'Она куріт айкос а я курю кокс,нанана.',
  'Гарна як машина пожарна!',
  'Як виглядаю?',
]
export const comments = [
  'Все відмінно!',
  'Загалом все непогано. Але не всі.',
  'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
  'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
  'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
  'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
]
export const names = [
  'КриптоГусь',
  'Вуйко',
  'Інокентій',
  'БОГДАН',
  'Жорік',
  'Міхуіл',
  'Ніколай',
  'Іван',
]

export const likesCount = {
  min: 15,
  max: 200
};
export const commentsCount = {
  min: 1,
  max: 6
};
export const photosCount = {
  min: 1,
  max: 6
};
export const publicationsCount = 26;
export const publications = new Array(publicationsCount).fill(null).map((_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: descriptions[i],
  likes: getRandomNumber(likesCount.min, likesCount.max),
  comments: createComments(+getRandomNumber(commentsCount.min, commentsCount.max),photosCount,comments,names)
}))
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
export const hashTagsInputValue = hashTagsInput.value.toLowerCase();


export const commentsLoader = document.querySelector('.social__comments-loader ');
export  const commentsShown = document.querySelector('.comments-shown');

