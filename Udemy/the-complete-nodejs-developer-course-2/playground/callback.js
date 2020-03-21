const callback = () => {
    console.log('Callback')
}
setTimeout(callback, 200)

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const sum = (a, b) => {
    console.log(a + b)
}

function add(a, b, callback) {
    setTimeout(() => {
        callback(a, b)
    }, 2000)
}

add(1, 2, sum)
