const inputRange = document.querySelector('.input-range');
const fontSelector = document.querySelector('.font-selector');
const btnBold = document.querySelector('.text-bold');
const btnItalic = document.querySelector('.text-italic');
const btnUnderline = document.querySelector('.text-underline');
const inputColor = document.querySelector('.input-color');
const sampleText = document.querySelector('.sample-text');

document.addEventListener('DOMContentLoaded', function () {
  const range = inputRange.value;
  sampleText.style.fontSize = `${range}px`;
});

inputRange.addEventListener('input', function () {
  // this => this is bind to the input in this case
  const range = this.value;
  sampleText.style.fontSize = `${range}px`;
});

fontSelector.addEventListener('change', () => {
  // this => this is bind to window in this case
  const fontFamily = fontSelector.value;
  sampleText.style.fontFamily = `${fontFamily}`;
});

btnBold.addEventListener('click', function () {
  const isTextBold = sampleText.classList.contains('font-bold');
  if (!isTextBold) {
    sampleText.classList.add('font-bold');
  } else {
    sampleText.classList.remove('font-bold');
  }
});

btnItalic.addEventListener('click', function () {
  const isTextItalic = sampleText.classList.contains('font-italic');
  if (!isTextItalic) {
    sampleText.classList.add('font-italic');
  } else {
    sampleText.classList.remove('font-italic');
  }
});
btnUnderline.addEventListener('click', function () {
  const isTextUnderliend = sampleText.classList.contains('font-underline');
  if (!isTextUnderliend) {
    sampleText.classList.add('font-underline');
  } else {
    sampleText.classList.remove('font-underline');
  }
});

inputColor.addEventListener('change', function () {
  const color = this.value;
  sampleText.style.color = `${color}`;
});
