const NotesModel = require('../notesModel');
const model = new NotesModel();
model.addNote('Feed the Peregrine Falcon');
console.table(model.getNotes());  //.table method/funct used as return value is an array

// console.log('The notes app is running.');
// console.warn('Or is it')
// console.error('Yeah it is...')
// These 3 lines were simply used to test logging within the web console.

const NotesView = require('../notesView');
view = new NotesView(model);
view.displayNotes();

const NotesClient = require('./notesClient');
client = new NotesClient();
client.getInfo();