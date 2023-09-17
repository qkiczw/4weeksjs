console.log(`Hello World`);
// - funtion to create notes
// - funtion to delete notes (use .remove() on element to delete!)
// - function to save notes
// - function init to read notes form the localsorage

const AddNoteBtn = document.querySelector('.add-note-btn');
const notesList = document.querySelector('.notes-list');

const saveNote = function () {
  const noteID = `id${Date.now()}`;
  const noteInput = document.querySelector('.note-input').value;
  localStorage.setItem(noteID, noteInput);

  createNote(noteID, noteInput);
};

const createNote = function (key, note) {
  const liElement = document.createElement('li');
  const paragraphElement = document.createElement('p');

  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-note-btn');
  delBtn.textContent = 'Delete';

  liElement.id = key;
  paragraphElement.textContent = note;
  liElement.appendChild(paragraphElement);
  liElement.appendChild(delBtn);

  notesList.appendChild(liElement);
};

AddNoteBtn.addEventListener('click', saveNote);

function init() {
  console.log(Object.keys(localStorage));
  Object.keys(localStorage).forEach((key) => {
    createNote(key, localStorage.getItem(key));
  });
}
init();
