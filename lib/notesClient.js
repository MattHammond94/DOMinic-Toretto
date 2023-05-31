class NotesClient {

  // getInfo() {
  //   return fetch('http://localhost:3000/notes')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  // }

  loadNotes(callback) {
    return fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
  }
}

module.exports = NotesClient;