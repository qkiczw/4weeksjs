const inputRange = document.querySelector('.input-range');
const fontSelector = document.querySelector('.font-selector');
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
