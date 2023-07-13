

export function formValidation(validationMessages, hashTagsInput, hasDuplicates, isValidHashtag,postData,uploadData) {
  const hashTagsInputValue = hashTagsInput.value.toLowerCase();
  const spacedArray = hashTagsInputValue.split(' ');
  const postUrl = 'http://127.0.0.1:4001/photos'
  if (spacedArray.length > 5) {
    hashTagsInput.setCustomValidity(validationMessages.firstMessage);
    hashTagsInput.reportValidity();

    if (hasDuplicates(spacedArray)) {
      hashTagsInput.setCustomValidity(validationMessages.secondMessage);
      hashTagsInput.reportValidity();
    } else {
      spacedArray.forEach((elem, index) => {
        const hashTagSymbol = elem.split('');
        if (hashTagSymbol[0] !== '#' && hashTagsInputValue.length > 0) {
          hashTagsInput.setCustomValidity(validationMessages.thirdMessage);
          hashTagsInput.reportValidity();
        } else {
          if (spacedArray[index].length > 20) {
            hashTagsInput.setCustomValidity(validationMessages.fourthMessage);
            hashTagsInput.reportValidity();
          } else if (!isValidHashtag(elem) && hashTagsInputValue.length > 0) {
            hashTagsInput.setCustomValidity(validationMessages.fifthMessage);
            hashTagsInput.reportValidity();
          } else {
            hashTagsInput.setCustomValidity('');
            hashTagsInput.reportValidity();

            postData(postUrl, uploadData.uploadPhotoSrc)
            console.log(uploadData.uploadPhotoSrc)
          }
        }
      })
    }
  }
  else {
    postData(postUrl, uploadData.uploadPhotoSrc)
    console.log(uploadData.uploadPhotoSrc)
  }
}
