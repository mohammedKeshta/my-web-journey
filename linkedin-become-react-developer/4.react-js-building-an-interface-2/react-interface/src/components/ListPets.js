import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import moment from 'moment';

class ListPets extends Component {
  state = {
    query: ''
  };

  updateQuery = event => {
    const query = event.target.value;
    this.setState({
      query: query.trim()
    });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { pets } = this.props;
    const { query } = this.state;

    let showPets = pets;

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showPets = (pets || []).filter(pet => match.test(pet.petName));
    }

    (showPets || []).sort(sortBy('petName'));

    return (
      <div>
        <div className="list-pets">
          <input
            type="text"
            className="search-pets"
            placeholder="Search pets"
            value={query}
            onChange={this.updateQuery}
          />

          {showPets.length !== pets.length && (
            <div className="showing-pets">
              <span>
                Now showing {showPets.length} of {pets.length}{' '}
              </span>
              <button onClick={this.clearQuery}>Show All</button>
            </div>
          )}

          <ol className="pets-list">
            {showPets.map(pet => (
              <li className="pet-list-item" key={pet.id}>
                <div
                  className="pet-avatar"
                  style={{
                    backgroundImage: `url(${pet.petAvatar})`
                  }}
                />
                <div className="pet-details">
                  <h4>{pet.petName}</h4>
                  <h5>{pet.ownerName}</h5>
                  <h6>{moment(new Date(pet.petDate)).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                  <p>{pet.petInfo}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default ListPets;
