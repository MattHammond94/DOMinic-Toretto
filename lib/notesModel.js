class NotesModel {

  constructor() { 
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(string) {
    return this.notes.push(string);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;