import subtract, { isAdult, add, square } from './utils'

console.log('app.js is running')

const randomNumber = Math.floor(Math.random() * 100)

console.log(`Age:${randomNumber} => Adult state: ${isAdult(randomNumber)}`)

console.log(subtract(100, 81))
