/**
 * @jest-environment jsdom
 */

const fs = require('fs');  // the fs module lets us read non js files
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe ('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html'); //set the 'Real' content(doc.body) - (that is because Jest "mocks" the HTML content internally)
  });

  it("Should return an array of all note texts when display notes is called", () => {
    const notesModel = new NotesModel();
    notesModel.addNote("Note 1");
    notesModel.addNote("Note 2");
    notesModel.addNote("Note 3");
    view = new NotesView(notesModel);
    view.displayNotes();
    expect(document.querySelectorAll(".note").length).toBe(3);
    expect(document.querySelectorAll(".note")[0].textContent).toBe("Note 1")
  });

  it('Should add a new note after button is clicked', () => {
    const model2 = new NotesModel();
    const view2 = new NotesView(model2);
    document.querySelector('#new-note').value = 'Walk the Salmon';
    const button = document.querySelector('#add-note-button');
    button.click();
    expect(document.querySelectorAll('.note').length).toBe(1);
    expect(document.querySelectorAll('.note')[0].textContent).toBe('Walk the Salmon');
  });
});
