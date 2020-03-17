console.log('Utilities.js')

const name = 'Mohammed'
// add numbers
const add = (...args) => args.reduce((acc, current) => (acc += current))

module.exports = {
    name,
    add,
}
