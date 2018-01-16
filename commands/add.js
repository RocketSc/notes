const { fetchNotes } = require('../helpers/fetchNotes');
const { saveNotes } = require('../helpers/saveNotes');


module.exports = ({title, body}) => {
  const notes = fetchNotes();

  if (notes.find(note => note.title === title)) {
    console.log('Note with the same title already exists');
    return;
  }

  saveNotes([...notes, {title, body}]);
  console.log('Note created');
}
