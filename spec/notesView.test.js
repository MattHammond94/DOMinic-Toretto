/**
 * @jest-environment jsdom
 */

const fs = require('fs');  // the fs module lets us read non js files
const NotesView = require('../lib/notesView');
const NotesModel = require('../lib/notesModel');
const NotesClient = require('../lib/notesclient');
require('jest-fetch-mock').enableMocks()

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

  it('Should display one complete list of all notes regardless of how many displayNotes calls', () => {
    const model3 = new NotesModel();
    const view3 = new NotesView(model3);
    model3.addNote("Feed the turtle");
    model3.addNote("Wash the camel");
    view3.displayNotes();
    view3.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('Should not display the input value of previous note within the input bar', () => {
    const model4 = new NotesModel();
    const view4 = new NotesView(model4);
    const input = document.querySelector('#new-note');
    input.value = "Brush the magic carpet";
    const button = document.querySelector('#add-note-button');
    button.click();
    expect(input.value).toBe('');
  });

  it('Should clear all current notes when button is clicked', () => {
    const model4 = new NotesModel();
    model4.addNote('Build a windmill out of cheddar');
    model4.addNote('Polish my knuckleduster');
    const view4 = new NotesView(model4);
    const button = document.querySelector('#reset-notes-button');
    button.click();
    expect(document.querySelectorAll('.note').length).toBe(0);
  });

  it('Should return a list of all notes retrieved from the API', (done) => {
    const client = new NotesClient();
    const model = new NotesModel();
    const view5 = new NotesView(model, client);

    fetch.mockResponseOnce(JSON.stringify({
      notes: ["A secret note", "Another Secret Note", "Another one"]
    }));

    // view5.displayNotesFromTheApi((returnedDataFromApi) => {
    //   expect(returnedDataFromApi.notes[1]).toBe("Another Secret Note");
    //   expect(returnedDataFromApi.notes.length).toBe(3);
    //   done();
    // });
  });
});
