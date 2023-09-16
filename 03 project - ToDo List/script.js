console.log(`Hello World`);
// - funtion to create notes
// - funtion to delete notes (use .remove() on element to delete!)
// - function to save notes
// - function init to read notes form the localsorage

const AddNoteBtn = document.querySelector('.add-note-btn');

const saveNote = (note) => {
  const noteID = Date.now().toString();
  localStorage.setItem(noteID, note);
};

const createNote = () => {
  const notesList = document.querySelector('.notes-list');
  const noteText = document.querySelector('.note-input').value;
  const liElement = document.createElement('li');

  saveNote(noteText);

  liElement.textContent = noteText;
  notesList.appendChild(liElement);
};

AddNoteBtn.addEventListener('click', createNote);
