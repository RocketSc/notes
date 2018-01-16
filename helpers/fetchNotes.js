const fs = require('fs');
const path = require('path');

const fetchNotes = () => {
  const notesPath = path.resolve('notes.json'); // TODO: extract to a constant

  try {
    const notes = fs.readFileSync(notesPath, 'utf8');
    
    return JSON.parse(notes);
  } catch (exception) {
    return [];
  }

};

module.exports = {
  fetchNotes,
};