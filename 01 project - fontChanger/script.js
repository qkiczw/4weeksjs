const inputRange = document.querySelector('.input-range');
const sampleText = document.querySelector('.sample-text');

document.addEventListener('DOMContentLoaded', function () {
  const range = inputRange.value;
  sampleText.style.fontSize = `${range}px`;
});
