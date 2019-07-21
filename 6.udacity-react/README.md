## Why React ? 
   - Composition
        > combine simple functions to build more complicated ones
        
        > Function composition is a mathematical concept that allows you to combine two or more functions into a new function.
   - [Imperative Code](https://tylermcginnis.com/imperative-vs-declarative-programming/)
        > we tell code exactly what to do and how to do it. 
        
        `
        
                const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
                const excitedPeople = []
        
                for (let i = 0; i < people.length; i++) {
                     excitedPeople[i] = people[i] + '!'
                }
        
   - [Declarative Code](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)
       > we don't code up all of the steps to get us to the end result. 
         Instead, we declare what we want done, and code will take care of doing it. 
        `
        
                const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
                const excitedPeople = people.map(name => name + '!')
        > Imperative code instructs JavaScript on how it should perform each step. 
          With declarative code, we tell JavaScript what we want to be done, 
          and let JavaScript take care of performing the steps.
   - Unidirectional Data Flow
        > Data moves differently with React's unidirectional data flow. In React, the data flows from the parent component to a child component.
        
        > In React, data flows in only one direction, from parent to child. If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.
        
   - [Virtual DOM](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
        > The Virtual DOM reflects a tree in which each node is an HTML element. React is able to traverse and carry out operations on this Virtual DOM, saving our app from having "costly" activity on the actual DOM.
   
   - [The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)
        > Diffing determines how to make efficient changes to the DOM. With diffing, old DOM nodes are taken out and replaced only when necessary. This way, our app doesn't perform any unnecessary operations to figure out when to render content.
   
   - Notes 
       > Components refer to reusable pieces of code ultimately responsible for returning HTML to be rendered onto the page. More often than not, you'll see React components written with JSX.
    
       >     
