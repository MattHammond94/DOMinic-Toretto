class NotesView { 

  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    this.addNoteButton = document.querySelector('#add-note-button');
    this.addNoteButton.addEventListener('click', () => {
      const newNote = document.querySelector('#new-note').value;
      this.addNewNote(newNote);
    });
    this.removeNotesButton = document.querySelector('#reset-notes-button');
    this.removeNotesButton.addEventListener('click', () => {
      this.model.reset();
      this.displayNotes();
    });
  };

  displayNotes() {
    this.clearNotes();
    this.model.getNotes().forEach((note) => {
      const newDiv = document.createElement("div"); 
      newDiv.className="note"
      newDiv.append(note)
      this.mainContainerEl.append(newDiv);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  clearNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove());
  }
}

module.exports = NotesView;