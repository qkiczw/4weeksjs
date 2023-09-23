const votingForm = document.querySelector('.voting-form');
const votingBtn = document.querySelector('.voting-btn');
const userName = document.querySelector('.user-name');
const userID = document.querySelector('.user-id');
const options = document.querySelector('.options-input');
const resultsList = document.querySelector('.voting-results');

const voters = new Map([
  ['Łukasz', '1234'],
  ['Maciej', '4321'],
  ['Martyna', '4321'],
  ['Milan', '1111'],
  ['Sara', '0001'],
]);

const votesCast = new Map([
  ['Opcja-01', 0],
  ['Opcja-02', 0],
  ['Opcja-03', 0],
]);

const votedUsers = new Set();

const displayResults = () => {
  for (const [option, vote] of votesCast) {
    resultsList.innerHTML += `<li>${option} - głosy: ${vote}</li>`;
  }
};

const addVote = () => {
  const user = userName.value;
  const id = userID.value;
  const voteOption = options.value;

  if (voters.get(user) === id) {
    if (!votedUsers.has(user)) {
      votedUsers.add(user);
      votesCast.set(voteOption, votesCast.get(voteOption) + 1);
    } else {
      alert(`Użytkownik: ${user} oddał już głos.`);
    }
  } else {
    alert('nieprawidłowe dane');
  }
};

votingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  addVote();

  resultsList.innerHTML = ``; // clear votes list
  displayResults();
});
