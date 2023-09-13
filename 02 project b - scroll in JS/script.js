const btn01 = document.querySelector('.btn-1');
const btn02 = document.querySelector('.btn-2');
const section02 = document.querySelector('.section-b');

btn02.addEventListener('click', function () {
  section02.scrollIntoView({ behavior: 'smooth' });
});
