import React, { Component } from 'react'
import CreateList from './CreateList'
import ListsContainers from '../containers/ListsContainer'

class Application extends Component {
  render() {
    return (
      <main className="Application">
        {/*<Users />*/}
        <section>
          <CreateList />
          <ListsContainers />
        </section>
      </main>
    )
  }
}

export default Application
