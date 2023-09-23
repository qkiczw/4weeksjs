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

const votedUsers = new Set();

const displayResults = () => {
  for (const [option, vote] of votesCast) {
    // console.log(option, vote);

    resultsList.innerHTML += `<li>${option} - głosów oddanych: ${vote}</li>`;
  }
};

const addVote = () => {
  const user = userName.value;
  const id = userID.value;
  const voteOption = options.value;

  if (!votedUsers.has(user)) {
    votedUsers.add(user);
    votesCast.set(voteOption, votesCast.get(voteOption) + 1);
  } else {
    alert(`Użytkownik: ${user} oddał już głos.`);
  }
};

votingForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(options.value);

  addVote();

  resultsList.innerHTML = ``; // clear votes list
  displayResults();
});
