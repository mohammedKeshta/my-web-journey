import { isAdult } from './utils'

console.log('app.js is running')

const ageRange = [12, 20, 10, 43]
const age = ageRange[Math.floor(Math.random() * ageRange.length)]

console.log(`age:${age} => Adult state: ${isAdult(age)}`)
