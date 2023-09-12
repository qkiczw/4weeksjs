const inputRange = document.querySelector('.input-range');
const sampleText = document.querySelector('.sample-text');

document.addEventListener('DOMContentLoaded', function () {
  const range = inputRange.value;
  sampleText.style.fontSize = `${range}px`;
});

inputRange.addEventListener('input', function () {
  // this => this is bing to the input in this case
  const range = this.value;
  sampleText.style.fontSize = `${range}px`;
});
