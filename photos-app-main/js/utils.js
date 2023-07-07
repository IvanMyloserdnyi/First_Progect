
export async function getRandomComments(commentsUrl,commentsCount,getRandomNumber,getServerData) {
  let comments = []
  const commentsRandomCount = getRandomNumber(commentsCount.min,commentsCount.max)
  const commentsArr = await getServerData(commentsUrl);
  for (let i=0;i<=commentsRandomCount;i++) {
    const indexOfComments = getRandomNumber(0,commentsArr.length)
    comments.push(commentsArr[indexOfComments])
  }
  return comments
}
export async function createPublications(photosUrl,commentsUrl,commentsCount,getRandomComments,getRandomNumber,getServerData) {
  const photos = await getServerData(photosUrl)
  for (let i in photos) {
    photos[i].comments = await getRandomComments(commentsUrl,commentsCount,getRandomNumber,getServerData)
  }
  return photos
}
export function getTargetPublication(evt,publications) {
  const targetId = +evt.target.dataset.id;
  return  publications.find((publication) =>publication.id === targetId);
}

export function hasDuplicates(spacedArray) {
  return spacedArray.some((value,index) =>spacedArray.indexOf(value) !== index);
}
export function getRandomNumber(minNum, maxNum) {
  return +(Math.random() * (maxNum - minNum) + minNum).toFixed(0)
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
