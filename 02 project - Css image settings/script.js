const root = document.documentElement; // this will catch the HTML element (:root in CSSS)!!!
const sampleImage = document.querySelector('.sample-image');
const brightnessBar = document.querySelector('.brightness-bar');
const contrastBar = document.querySelector('.contrast-bar');
const saturationBar = document.querySelector('.saturation-bar');
const blurBar = document.querySelector('.blur-bar');

const bars = [brightnessBar, contrastBar, saturationBar, blurBar];

bars.forEach((bar) => {
  bar.addEventListener('input', function () {
    console.log(bar.value);
  });
});
