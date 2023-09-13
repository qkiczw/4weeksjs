const root = document.documentElement; // this will catch the HTML element (:root in CSSS)!!!
const sampleImage = document.querySelector('.sample-image');
const brightnessBar = document.querySelector('.brightness-bar');
const contrastBar = document.querySelector('.contrast-bar');
const saturationBar = document.querySelector('.saturation-bar');
const hueBar = document.querySelector('.hue-bar');
const blurBar = document.querySelector('.blur-bar');
const getImageUrltn = document.querySelector('.get-image-url-btn');
const imageUrlInput = document.querySelector('.image-url-input');

const bars = [brightnessBar, contrastBar, saturationBar, hueBar, blurBar];

bars.forEach((bar) => {
  bar.addEventListener('input', function () {
    root.style.setProperty('--brightness', `${brightnessBar.value}%`);
    root.style.setProperty('--contrast', `${contrastBar.value}%`);
    root.style.setProperty('--saturation', `${saturationBar.value}%`);
    root.style.setProperty('--hue', `${hueBar.value}deg`);
    root.style.setProperty('--blur', `${blurBar.value}px`);
  });
});

getImageUrltn.addEventListener('click', function () {
  const imageUrl = imageUrlInput.value;
  sampleImage.src = imageUrl;
});
