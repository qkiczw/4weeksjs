function checkInput() {
  let inputVal = document.querySelector('.input').value;
  let option = document.querySelector('.select').value;

  console.log(inputVal);
  console.log(option, typeof option);

  const regexp = new RegExp(option);

  if (regexp.test(inputVal)) {
    alert('Jest OK!!!');
  } else {
    alert('nie jest OK :/');
  }
}

document.querySelector('.btn').addEventListener('click', checkInput);
