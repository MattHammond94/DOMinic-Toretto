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
}

module.exports = NotesModel;