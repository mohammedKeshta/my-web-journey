import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import { Link, navigate } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './error-boundaries';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };

  componentDidMount() {
    const { id } = this.props;
    pet.animal(+id).then(({ animal }) => {
      this.setState({
        url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      description,
      location,
      media,
      showModal
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
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
