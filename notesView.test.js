/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
let view;
jest.mock('./notesModel');

describe ('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    NotesModel.mockClear();
    let model = new NotesModel();
    view = new NotesView(model);
  });

  it("Should ", () => {
    view.model.getNotes.mockImplementationOnce(() => {
      return ["Note 1", "Note 2", "Note 3"]
    });
    view.displayNotes();
    expect(document.querySelectorAll(".note").length).toBe(3);
  });
});


