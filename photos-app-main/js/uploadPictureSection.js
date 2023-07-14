

export function addUploadPictureSection(uploadPictureSection, body) {
  body.classList.add('modal-open');
  uploadPictureSection.classList.remove('hidden')
}
export function removeUploadPictureSection(evt, uploadPictureSection, body, imgUploadForm, imgUploadDescription, imgUploadHashtags,resetPictureFilter) {
  if(
    (evt.key === 'Escape' && document.activeElement === imgUploadDescription)||
    (evt.key=== 'Escape' && document.activeElement === imgUploadHashtags)
    ) {
    evt.preventDefault();
  }
  else if(
    evt.key ==='Escape' && !uploadPictureSection.classList.contains('hidden')||
    evt.target.id === 'upload-cancel'
  ) {
    imgUploadForm.reset();
    uploadPictureSection.classList.add('hidden');
    body.classList.remove('modal-open');
    resetPictureFilter()
  }
}
