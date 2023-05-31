const NotesClient = require('../lib/notesClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('Should fetch an array of notes from the api', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ["A secret note"]
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes[0]).toBe("A secret note");
      expect(returnedDataFromApi.notes.length).toBe(1);
      done();
    });
  });
});