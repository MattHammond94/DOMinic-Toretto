const NotesModel = require('./lib/notesModel');
const NotesView = require('./lib/notesView');
const NotesClient = require('./lib/notesClient');

const model = new NotesModel();
model.addNote('Feed the Peregrine Falcon');

const client = new NotesClient();

view = new NotesView(model, client);
view.displayNotesFromTheApi();
view.displayNotes();

// console.table(model.getNotes());  //.table method/funct used as return value is an array
// console.log('The notes app is running.');
// console.warn('Or is it')
// console.error('Yeah it is...')
// ^ These 3 lines were simply used to test logging within the web console. ^
