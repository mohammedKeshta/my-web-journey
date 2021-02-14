import React, { useEffect, useState } from 'react'
import './App.css'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import awsExports from './aws-exports'
import { listTodos } from './graphql/queries'
import { createTodo } from './graphql/mutations'

Amplify.configure(awsExports)

const initialState = { name: '', description: '' }

function App() {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function addTodo() {
    try {
      const { name, description } = formState
      if (!name && !description) return
      const todo = { name, description }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, { input: todo }))
    } catch (e) {
      console.log(e.message)
    }
  }

  async function fetchTodos() {
    try {
      const {
        data: {
          listTodos: { items },
        },
      } = await API.graphql(graphqlOperation(listTodos))
      setTodos(items)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchTodos().catch((error) => console.log(error.message))
  }, [])

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>
        Create Todo
      </button>
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
        </div>
      ))}
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
  },
}

export default withAuthenticator(App)
