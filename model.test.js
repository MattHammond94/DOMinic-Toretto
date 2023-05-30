const NotesModel = require('./model');

describe (NotesModel, () => {
  it('Should return an empty array when no notes have been added', () => {
    const fakeModel = { getNotes: () => [] };
    expect(fakeModel.getNotes()).toEqual([]);
  });

  it('Should add a new note to the notes array', () => {
    const model1 = new NotesModel();
    model1.addNote("Cabbage");
    model1.addNote("Twisters");
    expect(model1.getNotes().length).toBe(2);
  });
});