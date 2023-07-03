
export function getRandomNumber(minNum, maxNum) {
  return (Math.random() * (maxNum - minNum) + minNum).toFixed(0)
}
export function getTargetPublication(evt,publications) {
  const targetId = +evt.target.dataset.id;
  return  publications.find((publication) =>publication.id === targetId);
}
export function createComments(count,photosCount,comments,names) {
  let id = 1;
  return new Array(count).fill(null).map(() => ({
    id: id++,
    avatar: `img/avatar-${getRandomNumber(photosCount.min, photosCount.max)}.svg`,
    message: comments[getRandomNumber(0, comments.length - 1)],
    name: names[getRandomNumber(0, names.length - 1)]
  }))
}
export function hasDuplicates(spacedArray) {
  return spacedArray.some((value,index) =>spacedArray.indexOf(value) !== index);
}
export function isValidHashtag(elem) {
  return /^#[A-Za-z0-9а-яА-ЯІіЄєЇї]+$/u.test(elem)
}
export function getServerData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error)
      alert('Help')
    })
}
