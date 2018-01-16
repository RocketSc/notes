const { fetchNotes } = require('../helpers/fetchNotes');
const { printNote } = require('../helpers/printNote');

module.exports = ({title}) => {
    const note = fetchNotes().find(note => note.title === title);

    if (!note) {
      console.log('Note not found');
      return;
    }

    printNote(note);
};