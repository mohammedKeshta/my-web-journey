const a = 4
const b = 6
const c = '5'
const d = 'cat'

const multiply = (num1, num2) => console.log(`${num1} * ${num2} =  ${num1 * num2}`)
const add = (num1, num2) => console.log(`${num1} + ${num2} =  ${num1 + num2}`)

multiply(a, b) //=> 24
multiply(a, c) //=> 20
multiply(a, d) //=> NaN

add(a, b) //=> 10
add(a, c) //=> 45
add(a, d) //=> 4cat