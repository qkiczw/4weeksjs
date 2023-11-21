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

  // Email check
  const emailRegEx = /^[a-zA-Z0-9-_.]+@[a-z0-9]+\.[a-z]{2,6}$/;

  console.log(emailRegEx.test(emailVal));

  if (!emailRegEx.test(emailVal)) {
    alert('Email nie jest poprawny!');
    return;
  }
};

// formBtn.addEventListener('submit', validateForm);
form.addEventListener('submit', validateForm);

// Ściąga:
// ==================>
//  // => w tych nawiasach zapisujemy wzór regex
// ^ oznacza początek stringa do sprawdzenia
// $ oznacza koniec sprawdzanego stringa
//  [] grupa np liter czy cyfr
// + za nawiasem mówi o tym, że ma być np jedna litera lub więcej
// \. mówi o tym, że ma być kropka
// {} w tym nawiasie podajemy zakres ile ma być znaków
