let notes = []

const create = (title, description) => [...notes, ...[{ title, description }]]
const getAll = () => notes
const getOne = title => notes.filter(note => note.title === title)
const removeOne = title => notes.filter(note => note.title !== title)
const update = (title, description) => {
    let current = notes.filter(note => note.title === title)
    current.description = description
    return current
}
const removeAll = () => {
    notes = []
    return notes
}
module.exports = {
    getAll,
    getOne,
    create,
    update,
    removeOne,
    removeAll,
}
