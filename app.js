const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");
const { demandOption } = require("yargs");

//Create ADD Command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },

    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create REMOVE Command
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Creating list command
yargs.command({
  command: "list",
  description: "List all notes",
  handler() {
    notes.listNotes();
  },
});

//Create Read Command
yargs.command({
  command: "read",
  description: "Read a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
