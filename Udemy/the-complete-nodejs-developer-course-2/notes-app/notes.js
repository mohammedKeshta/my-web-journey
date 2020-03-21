const fs = require('fs')
const chalk = require('chalk')

const NOTE_PATH = 'notes.json'

const load = () => {
    try {
        let notes = fs.readFileSync(NOTE_PATH)
        return JSON.parse(notes.toString())
    } catch (err) {
        return []
    }
}

const save = (notes = []) => {
    fs.writeFile(NOTE_PATH, JSON.stringify(notes, null, 2), err => {
        // Checking for errors
        if (err) {
            return chalk.bold.red.inverse(`An error occurred while saving Notes. ${err.message}`)
        }
        console.log(chalk.bold.green.inverse(`Notes Saved`)) // Success
    })
}

const create = (title, body) => {
    // STEP 1: load notes
    let notes = load()
    // STEP 2: Adding new data to users object and check if note exist, if not add it
    const found = notes.some(note => note.title === title)
    if (!found) {
        notes.push({ title, body })
        // STEP 3: save notes
        save(notes)
        console.log(chalk.bold.green.inverse(`New Note Created`))
    } else console.log(chalk.bold.cyan.inverse(`Note with title: "${title}" already taken`))
}
const list = (title = null) => {
    // load notes
    let notes = load()
    if (title) {
        let current = notes.filter(note => note.title === title)
        if (current.length === 0) {
            return console.log(chalk.bold.cyan.inverse(`No note with title: "${title}"`))
        }
        console.log(chalk.bold.green.inverse(`Note with title: "${title}"`))
        return console.log(JSON.stringify(current, null, 2))
    }
    console.log(chalk.bold.green.inverse(`All Notes Listed`))
    return console.log(JSON.stringify(notes, null, 2))
}
const remove = (title = null) => {
    // load notes
    let notes = load()
    // check if it's remove all or remove one
    const found = notes.some(note => note.title === title)
    // handel if title doesn't exist
    if (title && !found) return console.log(chalk.bold.red.inverse(`No Note Found with title ${title}`))
    if (title && found) {
        notes = notes.filter(note => note.title !== title)
        console.log(chalk.bold.green.inverse(`Note Removed`))
    } else {
        notes = []
        console.log(chalk.bold.green.inverse(`All Notes Removed`))
    }
    // save notes
    save(notes)
}
const update = payload => {
    // load notes
    let notes = load()
    // handle empty notes
    if (!Array.isArray(notes) || !notes.length)
        return console.log(chalk.bold.cyan.inverse("Their's no notes, Please add notes first"))
    //Find index of specific object using findIndex method.
    let noteIndex = notes.findIndex(notes => notes.title === payload.title)
    //Update note's body.
    notes[noteIndex].body = payload.body
    // save notes
    save(notes)
    console.log(chalk.bold.green.inverse(`Note with title: ${payload.title} updated`))
}

module.exports = {
    list,
    create,
    update,
    remove,
}
