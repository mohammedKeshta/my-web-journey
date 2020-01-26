import React, { Component } from 'react';

import CreateCard from './CreateCard';
import CardContainer from '../redux/containers/CardContainer';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState({ ...this.state, showOptions: !this.state.showOptions });
  };

  createCard = () => {};

  removeList = () => {};

  render() {
    const { list = {} } = this.props;
    const { showOptions } = this.state;

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
          {!showOptions ? 'Toggle Options' : 'Collapse Options'}
        </button>
        <div>
          {list.cards.map(cardId => (
            <CardContainer key={cardId} cardId={cardId} />
          ))}
        </div>
      </article>
    );
  }
}

export default List;
