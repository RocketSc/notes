const fs = require('fs');
const path = require('path');

const saveNotes = (notes) => {
  const notesPath = path.resolve('notes.json'); // TODO: extract to a constant

  try {
    fs.writeFileSync(
      notesPath,
      JSON.stringify(notes),
      {encoding: 'utf8'}
    );
  } catch (exception) {
    console.log(exception);
  }

};

module.exports = {
  saveNotes,
};