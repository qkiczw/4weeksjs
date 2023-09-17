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
  liElement.classList.add('note');
  const spanElement = document.createElement('span');

  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-note-btn');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function () {
    deleteNote(key);
  });

  liElement.id = key;
  spanElement.textContent = note;
  liElement.appendChild(spanElement);
  liElement.appendChild(delBtn);

  notesList.appendChild(liElement);
};

const deleteNote = function (noteID) {
  document.querySelector(`#${noteID}`).remove();
  localStorage.removeItem(noteID);
};

AddNoteBtn.addEventListener('click', saveNote);

function init() {
  Object.keys(localStorage).forEach((key) => {
    createNote(key, localStorage.getItem(key));
  });
}
init();
