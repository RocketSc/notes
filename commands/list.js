const { fetchNotes } = require('../helpers/fetchNotes');
const { printNote } = require('../helpers/printNote');

module.exports = () => fetchNotes().forEach(note => printNote(note));
