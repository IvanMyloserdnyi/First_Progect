import {getRandomNumber} from "./utils.js";


export function imgSort(publications, createPhotosMarkup, photoTemplate, picturesSection, photosFragment, removeMarkup) {
  const imgFiltersSection = document.querySelector('.img-filters');
  const imgFilterDefault = document.querySelector('#filter-default');
  const imgFilterRandom = document.querySelector('#filter-random');
  const imgFilterDiscussed = document.querySelector('#filter-discussed');
  imgFiltersSection.classList.remove('img-filters--inactive')
  imgFiltersSection.addEventListener('click', (evt)=> {
    getImgFilters(evt,imgFilterDefault,imgFilterRandom,imgFilterDiscussed,removeMarkup,createPhotosMarkup,publications,photoTemplate,picturesSection,photosFragment)
  })
}
const getImgFilters = debounce( function (evt,imgFilterDefault,imgFilterRandom,imgFilterDiscussed,removeMarkup,createPhotosMarkup,publications,photoTemplate,picturesSection,photosFragment) {
  switch(true) {
    case evt.target === imgFilterDefault:
      imgFilterDefault.classList.add('img-filters__button--active');
      imgFilterRandom.classList.remove('img-filters__button--active');
      imgFilterDiscussed.classList.remove('img-filters__button--active');
      removeMarkup(picturesSection)
      createPhotosMarkup(publications,photoTemplate,picturesSection,photosFragment)
      break
    case evt.target === imgFilterRandom:
      imgFilterDefault.classList.remove('img-filters__button--active');
      imgFilterRandom.classList.add('img-filters__button--active');
      imgFilterDiscussed.classList.remove('img-filters__button--active');
      const randomPublications = getRandomPublications(publications);
      removeMarkup(picturesSection);
      createPhotosMarkup(randomPublications,photoTemplate,picturesSection,photosFragment)
      break
    case evt.target === imgFilterDiscussed:
      imgFilterDefault.classList.remove('img-filters__button--active');
      imgFilterRandom.classList.remove('img-filters__button--active');
      imgFilterDiscussed.classList.add('img-filters__button--active');
      const discussedPublications = getDiscussedPublications(publications);
      removeMarkup(picturesSection);
      createPhotosMarkup(discussedPublications,photoTemplate,picturesSection,photosFragment)
      break
    default:
      console.log('Img Filter error');
      break
  }
},500);
function getRandomPublications(publications) {
  const newPublications = JSON.parse(JSON.stringify(publications))
  const randomPublications = []
  for (let i = 0;i < 10;i++) {
    const randomIndex = getRandomNumber(0,newPublications.length-1)
    randomPublications[i]=newPublications.splice(randomIndex,1)[0]
  }
  return randomPublications
}
function getDiscussedPublications(publications) {
  const discussedPublications = JSON.parse(JSON.stringify(publications))
  return discussedPublications.sort(function (a, b) {
    if (a.comments.length > b.comments.length) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function executeFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if(!immediate) func.apply(context,args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later,wait);
    if (callNow) func.apply(context,args)
  };
}
/*const getImgFilters = (evt,imgFilterDefault,imgFilterRandom,imgFilterDiscussed,removeMarkup,createPhotosMarkup,publications,photoTemplate,picturesSection,photosFragment) => {
  switch(true) {
    case evt.target === imgFilterDefault:
      imgFilterDefault.className = 'img-filters__button  img-filters__button--active';
      imgFilterRandom.className = 'img-filters__button';
      imgFilterDiscussed.className = 'img-filters__button';
      removeMarkup(picturesSection)
      createPhotosMarkup(publications,photoTemplate,picturesSection,photosFragment)
      break
    case evt.target === imgFilterRandom:
      imgFilterDefault.className = 'img-filters__button';
      imgFilterRandom.className = 'img-filters__button img-filters__button--active';
      imgFilterDiscussed.className = 'img-filters__button';
      const randomPublications = getRandomPublications(publications);
      removeMarkup(picturesSection);
      createPhotosMarkup(randomPublications,photoTemplate,picturesSection,photosFragment)
      break
    case evt.target === imgFilterDiscussed:
      imgFilterDefault.className = 'img-filters__button';
      imgFilterRandom.className = 'img-filters__button';
      imgFilterDiscussed.className = 'img-filters__button img-filters__button--active';
      const discussedPublications = getDiscussedPublications(publications);
      removeMarkup(picturesSection);
      createPhotosMarkup(discussedPublications,photoTemplate,picturesSection,photosFragment)
      break
    default:
      console.log('Img Filter error');
      break
  }
}*/


