const NotesModel = require('./notesModel');
const model = new NotesModel();
model.addNote('Feed the Peregrine Falcon');
model.addNote('Walk the ferrett');
console.table(model.getNotes());

console.log('The notes app is running.');
console.warn('Or is it')
console.error('Yeah it is...')

const NotesView = require('./notesView');
view = new NotesView(model);
view.displayNotes();
