class NotesView { 

  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
  }

  displayNotes() {
    this.model.getNotes().forEach((note) => {
      const newDiv = document.createElement("div"); 
      newDiv.className="note"
      newDiv.append(note)
      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NotesView;