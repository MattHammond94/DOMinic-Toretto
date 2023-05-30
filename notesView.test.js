/**
 * @jest-environment jsdom
 */

const fs = require('fs');  // the fs module lets us read non js files
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
let view;
jest.mock('./notesModel');  //mocking implemented.

describe ('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');  //set the 'Real' content(doc.body) - (that is because Jest "mocks" the HTML content internally)
    NotesModel.mockClear();
    let model = new NotesModel();
    view = new NotesView(model);
  });

  it("Should return an array of all note texts", () => {
    view.model.getNotes.mockImplementationOnce(() => {
      return ["Note 1", "Note 2", "Note 3"]
    });
    view.displayNotes();
    expect(document.querySelectorAll(".note").length).toBe(3);
  });
});



