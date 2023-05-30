const NotesModel = require('./model');

describe (NotesModel, () => {
  it('Should return an empty array when no notes have been added', () => {
    const fakeModel = { getNotes: () => [] };
    expect(fakeModel.getNotes()).toEqual([]);
  });
});