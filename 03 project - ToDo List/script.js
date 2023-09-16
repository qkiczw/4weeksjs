console.log(`Hello World`);
// - funtion to create notes
// - funtion to delete notes
// - function to save notes
// - function init to read notes form the localsorage

const AddNoteBtn = document.querySelector('.add-note-btn');
const noteText = document.querySelector('.note-input').value;

const saveNote = function () {
  const noteID = Date.now().toString();
  const noteText = document.querySelector('.note-input').value;
  localStorage.setItem(noteID, noteText);
};

AddNoteBtn.addEventListener('click', function () {
  saveNote();
});
