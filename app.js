const yargs = require('yargs');

const commands = require('./commands');
const { title, body } = require('./commands/arguments');

const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title,
  })
  .command('remove', 'Remove a note', {
    title
  })
  .help()
  .argv;

const command = argv._[0];

if (!commands[command]) {
  console.log('Command not recognized');
  process.exit(1);
}

commands[command](argv);
