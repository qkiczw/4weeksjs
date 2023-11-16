const phoneEl = document.querySelector('#phone');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const formBtn = document.querySelector('.form__btn');
const form = document.querySelector('form');

const validateForm = (e) => {
  e.preventDefault();

  let phoneVal = phoneEl.value;
  let emailVal = emailEl.value;
  let passwordVal = passwordEl.value;

  console.log(`VALS: `, phoneVal, emailVal, passwordVal);
};

// formBtn.addEventListener('submit', validateForm);
form.addEventListener('submit', validateForm);
