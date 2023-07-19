class NotesView { 

  constructor(model, client) {
    this.client = client
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
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
    document.querySelector('#new-note').value = "";
  }

  clearNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove());
  }

  displayNotesFromTheApi() {
    this.client.loadNotes((data) => {
      data.forEach((note) => {
        this.addNewNote(note);
      });
    });
  }

}

module.exports = NotesView;