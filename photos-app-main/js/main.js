/*import {createPhotosMarkup} from "./photosMarkup";*/


const descriptions = [
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
const comments = [
  'Все відмінно!',
  'Загалом все непогано. Але не всі.',
  'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
  'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
  'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
  'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
]
const names = [
  'КриптоГусь',
  'Вуйко',
  'Інокентій',
  'БОГДАН',
  'Жорік',
  'Міхуіл',
  'Ніколай',
  'Іван',
]

const likesCount = {
  min: 15,
  max: 200
};
const commentsCount = {
  min: 1,
  max: 6
};
const photosCount = {
  min: 1,
  max: 6
};
const publicationsCount = 25;

function getRandomNumber(minNum, maxNum) {
  return (Math.random() * (maxNum - minNum) + minNum).toFixed(0)
}

const publications = new Array(publicationsCount).fill(null).map((_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: descriptions[i],
  likes: getRandomNumber(likesCount["min"], likesCount["max"]),
  comments: createComments(+getRandomNumber(commentsCount["min"], commentsCount["max"]))
}))

function createComments(count) {
  let id = 1;
  return new Array(count).fill(null).map(() => ({
    id: id++,
    avatar: `img/avatar-${getRandomNumber(photosCount["min"], photosCount["max"])}.svg`,
    message: comments[getRandomNumber(0, comments.length - 1)],
    name: names[getRandomNumber(0, names.length - 1)]
  }))
}

let photoTemplate = document.querySelector('#picture')
let picturesSection = document.querySelector('.pictures')

export function createPhotosMarkup(postsObg) {
  let photosFragment = document.createDocumentFragment()
  postsObg.forEach(post => {
    let clonedPhotoTemplate = photoTemplate.content.cloneNode(true);
    clonedPhotoTemplate.querySelector('.picture__img').src = post.url;
    clonedPhotoTemplate.querySelector('.picture__comments').innerText = post.comments.length
    clonedPhotoTemplate.querySelector('.picture__likes').innerText = post.likes
    photosFragment.appendChild(clonedPhotoTemplate)
  })
  picturesSection.appendChild(photosFragment)
}

createPhotosMarkup(publications)
