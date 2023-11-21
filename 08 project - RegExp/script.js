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

  // RegEx patterns
  const emailRegEx = /^[a-zA-Z0-9-_.]+@[a-z0-9]+\.[a-z]{2,6}$/;
  const phoneRegEx = /^(\d{3}\s){2}\d{3}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,20}$/;

  console.log(emailRegEx.test(emailVal));
  console.log(phoneRegEx.test(phoneVal));
  console.log(passwordRegEx.test(passwordVal));

  if (!emailRegEx.test(emailVal)) {
    alert('Email nie jest poprawny!');
    return;
  }
  if (!phoneRegEx.test(phoneVal)) {
    alert('Numer telefonu jest nieprawidłowy!');
  }
  if (!passwordRegEx.test(passwordVal)) {
    alert('Hasło jest nieprawidłowe!');
  }

  if (
    emailRegEx.test(emailVal) &&
    phoneRegEx.test(phoneVal) &&
    passwordRegEx.test(passwordVal)
  ) {
    alert('Formularz został przesłany!');
  }
  {
    alert('BŁĄD! Formularz nie został wysłany!');
  }
};

// formBtn.addEventListener('submit', validateForm);
form.addEventListener('submit', validateForm);

// Ściąga:
// ==================>
//  // => w tych nawiasach zapisujemy wzór regex
// ^ oznacza początek stringa do sprawdzenia
// $ oznacza koniec sprawdzanego stringa
// \d oznacza cyfrę od 0 do 9
//  [] jeden albo więcej np liter lub cyfr lub znaków
// + za nawiasem mówi o tym, że ma być np jedna litera lub więcej
// \. mówi o tym, że ma być kropka
// \. mówi o tym, że w tym miejscu ma być biała spacja(odstęp),
// {} w tym nawiasie podajemy zakres ile ma być znaków (lub jedną cyfrę dającą konkretną liczbę powtórzeń)
// (warunek) sprawdź zanim pójdziesz dalej => można napisać warunek czy jakiś string zawiera coś np wielką literę, cyfrę, znak specjalny
// . oznacza dowolny znak (oprócz przejścia do nowej lini)
// ?= asercja wyprzedzająca pozytywna
// .* wszystkie znaki (sprawdź w całym stringu)
// \W znak, który nie jest znakiem słownym zdefiniowanym przez \w silnika czyli np !@#$%%^&*()
