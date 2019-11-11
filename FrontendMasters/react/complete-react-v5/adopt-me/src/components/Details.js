import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import { Link } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './error-boundaries';
import ThemeContext from './ThemeContext';

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { id } = this.props;
    pet.animal(+id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      description,
      location,
      media
    } = this.state;
    if (loading) {
      return (
        <div className="loading-wrapper">
          <div className="loading" />
        </div>
      );
    }
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          <Link to="/">
            <button className="button is-dark back">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
