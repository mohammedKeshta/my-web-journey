const heading = document.querySelector('h6')

heading.style.backgroundColor = 'orange'
heading.style.fontSize = '2em'
heading.style.padding = '1em'

const mainHeading = document.querySelector('h1')

function myEventListeningFunction () {

    console.log('The document was clicked!')

    mainHeading.textContent = 'New Heading Change'
}
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction)

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction)

function respondToTheClick(id) {
    console.log(`A paragraph ${id} was clicked.`)
}

// const div = document.createElement('div')
const fragment = document.createDocumentFragment()


for (let i = 1; i < 200 ; i++) {
    // Create a pragaph element
    const p = document.createElement('p')
    // insert text to paragarph
    const textNode = document.createTextNode(`Paragarah: ${i}`)
    p.setAttribute('data-id', i)
    // append text to paragarph
    p.appendChild(textNode)
    // append to container
    // div.appendChild(p)
    fragment.appendChild(p)
}

// create an event click listenter for each paragaph
div.addEventListener('click', (event) => {
    respondToTheClick(event.target.dataset.id)
})

document.body.appendChild(fragment)