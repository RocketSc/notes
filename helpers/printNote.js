const fs = require('fs');
const path = require('path');

const printNote = ({title, body}) => {
  console.log(`title: ${title}`);
  console.log(`body: ${body}`);
  console.log('\n');
};

module.exports = {
  printNote,
};