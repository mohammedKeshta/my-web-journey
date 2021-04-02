import React, { Component } from 'react'

import CreateCard from './CreateCard'
import CardContainer from '../containers/CardContainer'

class List extends Component {
  state = { showOptions: false }

  toggleOptions = () => {}

  createCard = () => {}

  removeList = () => {}

  render() {
    const { list = {} } = this.props
    const { showOptions } = this.state

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCard onCreateCard={this.createCard} />
            <button className="List-remove danger" onClick={this.removeList}>
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
        <div>
          {list.cards.map((cardId) => (
            <CardContainer key={cardId} cardId={cardId} />
          ))}
        </div>
      </article>
    )
  }
}

export default List
