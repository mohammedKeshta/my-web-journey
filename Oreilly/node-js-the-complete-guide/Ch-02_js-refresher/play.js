// Arrow Functions
const add = (...nums) => nums.reduce((prev, current) => prev + current, 0)
console.log(add(1, 2, 3))
console.log(add(1, 2, 3, 4))

// Object
const person = {
    name: 'Mohammed',
    age: 26,
    greeting: function () {
        console.log(`I 'am ${this.name} and my age is ${this.age}`)
    }
}

person.greeting()

// Array
let hobbies = ['football', 'reading', 'walking', 'running']
let editedHobbiesMap = hobbies.map(hobby => `Hobby: ${hobby}`)
console.log(hobbies)
console.log(editedHobbiesMap)

let editedHobbiesForEach = hobbies.forEach(hobby => `Hobby: ${hobby}`)
console.log(hobbies)
console.log(editedHobbiesForEach)


// Async & Promises
setTimeout(() => {
    console.log('Timer Done')
}, 2000)
console.log('Hi')
console.log('Hello')

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
        }, 2000)
    })
}

fetchData().then(text => {
    console.log(text)
})

