
export const uploadData = {
  uploadPhotoSrc: null
}

export function getUploadPhoto(evt){
  const preview = document.querySelector('img');
  const selectedFile = evt.target.files[0];
  //uploadData.uploadPhotoEffects = selectedFile;
  //console.log(selectedFile)
  const reader= new FileReader();
  reader.onload =function(evt){
    preview.src = evt.target.result;
    uploadData.uploadPhotoSrc = preview.src
    console.log(typeof preview.src)
    console.log(uploadData.uploadPhotoSrc)

  };
  reader.readAsDataURL(selectedFile);
}
export function postData(url,file)  {
  console.log("Uploading file...");
  fetch(url, {
    method: "POST",
    body: JSON.stringify(file),
  })
    .then((response) => {
      console.log(response.ok)
      if (response.ok) {
        showUploadMessageResult('done')
        return response.text();
      } else {
        showUploadMessageResult('fail')
        throw new Error("Request failed with status: " + response.status);
      }

    })
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      showUploadMessageResult('fail')
      console.error(error);
    });
}
export function showUploadMessageResult(result) {
  let id = result === 'done'? '#success': '#error'
  const successMessageTemplate = document.querySelector(id);
  const body = document.querySelector('.body')
  const clonedMessageTemplate = successMessageTemplate.content.cloneNode(true)
  clonedMessageTemplate.querySelector('div').setAttribute('data-id','upload_Message')
  body.appendChild(clonedMessageTemplate)
  body.addEventListener('click', (evt) =>removeUploadMessageResult(evt,body))
  //body.addEventListener('keydown', (evt) => removeUploadMessageResult(evt,body))
}
export function removeUploadMessageResult(evt,body) {
  if(evt.target.type === 'button'||evt.target.dataset.id === undefined) {
    body.removeChild(body.lastChild)
  }
  /*if(evt.key === 'escape' && body.querySelector('#upload_Message') === null) {//непрацЮЭЭЭ
    body.removeChild(body.lastChild)
  }*/
}




