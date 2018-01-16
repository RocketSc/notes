const { fetchNotes } = require('../helpers/fetchNotes');
const { saveNotes } = require('../helpers/saveNotes');

module.exports = ({title}) => {
  const notes = fetchNotes();

  const index = notes.findIndex(note => note.title === title);

  if (index === -1) {
    console.log('There is no note with this title');
    return;
  }
  
  saveNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
}
