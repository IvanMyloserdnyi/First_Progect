import noUiSlider from "../node_modules/nouislider/dist/nouislider.mjs";
const scaleSection = document.querySelector('.img-upload__scale')
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');
const scaleParameters = {
  min:25,
  max:100,
  step: 25
}
const slider = document.querySelector('#slider')
const effectsList = document.querySelector('.effects__list')
const effects = {
  chrome: {
    minValue: 0,
    maxValue: 1,
    step: 0.1
  },
  sepia: {
    minValue: 0,
    maxValue: 1,
    step: 0.1
  },
  marvin: {
    minValue: 0,
    maxValue: 100,
    step: 1
  },
  phobos: {
    minValue: 0,
    maxValue: 3,
    step: 0.1
  },
  heat: {
    minValue: 1,
    maxValue: 3,
    step: 0.1
  }
}

export function getPhotosEffects() {
  scaleSection.addEventListener('click', (evt) =>getScale(evt));
  effectsList.addEventListener('click',(evt) =>getFilters(evt))
}
function getFilters(evt) {
  console.log(evt.target.id)
  switch (true) {
    case evt.target.id === 'effect-none':
      image.className = 'img-upload__preview';
      createSlider('remove');
      refreshImage()
      break;
    case evt.target.id === 'effect-chrome':
      image.className = 'img-upload__preview effects__preview--chrome'
      createSlider('add', effects.chrome);
      break;
    case evt.target.id === 'effect-sepia':
      image.className = 'img-upload__preview effects__preview--sepia'
      createSlider('add', effects.sepia);
      break;
    case evt.target.id === 'effect-marvin':
      image.className = 'img-upload__preview effects__preview--marvin'
      createSlider('add', effects.marvin);
      break;
    case evt.target.id === 'effect-phobos':
      image.className = 'img-upload__preview effects__preview--phobos'
      createSlider('add', effects.phobos);
      break;
    case evt.target.id === 'effect-heat':
      image.className = 'img-upload__preview effects__preview--heat'
      createSlider('add', effects.heat);
      break;

  }
}
function createSlider(action,effect) {

  if(action === 'remove') {
    if (slider.noUiSlider) {
      slider.noUiSlider.destroy()
    }
  }
   else if(action === 'add') {
    const minValue = effect.minValue;
    const maxValue = effect.maxValue;
    const step = effect.step
     if(!slider.noUiSlider) {
       noUiSlider.create(slider,{
         start: maxValue,
         range: {
           min:minValue,
           max:maxValue
         },
         step: step,
         connect: 'lower',
       });
     } else {
       const optionsToUpdate = {
         start: maxValue,
         range: {
           min: minValue,
           max: maxValue
         },
         step: step
       }
       slider.noUiSlider.updateOptions(optionsToUpdate);
     }
     slider.noUiSlider.on('update',function(values,handle){
       const value = values[handle];
       refreshImage(value)
     })
  }
}
function refreshImage(value) {
  switch (true) {
    case image.classList.contains('effects__preview--chrome'):
      image.style.filter = `grayscale(${value})`;
      break;
    case image.classList.contains('effects__preview--sepia'):
      image.style.filter = `sepia(${value})`;
      break;
    case image.classList.contains('effects__preview--marvin'):
      image.style.filter = `invert(${value}%)`;
      break;
    case image.classList.contains('effects__preview--phobos'):
      image.style.filter = `blur(${value}px)`;
      break;
    case image.classList.contains('effects__preview--heat'):
      image.style.filter = `brightness(${value})`;
      break;
    default:
      image.style.filter = ''
      break
  }
}
function getScale(evt) {
  let scaleValue = +scaleControlValue.value.substring(0,scaleControlValue.value.length-1);

  switch (true) {
    case scaleValue < scaleParameters.min||scaleValue>scaleParameters.max: return;
    case evt.target === scaleControlSmaller && scaleValue > scaleParameters.min:
      scaleValue -= scaleParameters.step;
      scaleControlValue.value = scaleValue+'%';
      image.style.transform = `scale(${scaleValue/100})`;
      break;
    case evt.target === scaleControlBigger && scaleValue < scaleParameters.max:
      scaleValue += scaleParameters.step;
      scaleControlValue.value = scaleValue+'%';
      image.style.transform = `scale(${scaleValue/100})`;
      break;
    default:
      console.log('Scale Error');
      break;
  }
}
//При натисканні на кнопки .scale__control --smaller і .scale__control --bigger має змінюватися значення поля .scale__control --value;
