const notesController = require('./notes')
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
        notesController.create(title, body)
    },
})
// List notes
yargs.command({
    command: 'list',
    describe: 'List Notes',
    builder: {
        title: {
            describe: 'Note title u Need',
            type: 'string',
        },
    },
    handler: ({ title }) => {
        notesController.list(title)
    },
})

// delete notes
yargs.command({
    command: 'delete',
    describe: 'Delete Notes',
    builder: {
        title: {
            describe: 'Note title u need to delete',
            type: 'string',
        },
    },
    handler: ({ title }) => {
        notesController.remove(title)
    },
})

// update note
yargs.command({
    command: 'update',
    describe: 'update Notes',
    builder: {
        title: {
            describe: 'Note title u need to update',
            type: 'string',
            demandOption: require,
        },
        body: {
            describe: 'Note body u need to update',
            type: 'string',
        },
    },
    handler: payload => {
        notesController.update(payload)
    },
})

yargs.parse()
