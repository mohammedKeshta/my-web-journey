import React, { Component } from 'react';
import pet, { Photo } from '@frontendmasters/pet';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';

const Modal = React.lazy(() => import('./Modal'));

class Details extends Component<
  RouteComponentProps<{ id: string; theme: string }>
> {
  public state = {
    loading: true,
    showModal: false,
    url: '',
    name: '',
    animal: '',
    breed: '',
    description: '',
    location: '',
    media: [] as Photo[],
  };

  public componentDidMount() {
    const { id } = this.props;
    if (!id) {
      navigate('');
      return;
    }
    pet
      .animal(+id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err: Error) => this.setState({ error: err }));
  }

  private toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  private adopt = () => navigate(this.state.url);

  public render() {
    const { theme } = this.props;
    const {
      loading,
      name,
      animal,
      breed,
      description,
      location,
      media,
      showModal,
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
          <button style={{ backgroundColor: theme }} onClick={this.toggleModal}>
            Adopt {name}
          </button>
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

const mapStateToProps = ({ theme }: any) => ({ theme });

function DetailsErrorBoundary(props: RouteComponentProps<{ id: string }>) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default connect(mapStateToProps)(DetailsErrorBoundary);
