const votingForm = document.querySelector('.voting-form');
const votingBtn = document.querySelector('.voting-btn');
const userName = document.querySelector('.user-name');
const userID = document.querySelector('.user-id');
const options = document.querySelector('.options-input');
const resultsList = document.querySelector('.voting-results');

const voters = new Map([
  ['Łukasz', ['1234']],
  ['Maciej', ['4321']],
  ['Martyna', ['4321']],
  ['Milan', ['1111']],
  ['Sara', ['0001']],
]);

const votesCast = new Map([
  ['Opcja-01', 0],
  ['Opcja-02', 0],
  ['Opcja-03', 0],
]);

const displayResults = () => {
  for (const [option, vote] of votesCast) {
    console.log(option, vote);

    resultsList.innerHTML += `<li>${option} - głosów oddanych: ${vote}</li>`;
  }
};

votingForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(options.value);

  resultsList.innerHTML = ``; // clear votes list
  displayResults();
});
