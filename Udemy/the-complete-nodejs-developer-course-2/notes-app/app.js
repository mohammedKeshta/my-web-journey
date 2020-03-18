const notesController = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({ title, body }) => {
        console.log(title, body)
    },
})

yargs.parse()
