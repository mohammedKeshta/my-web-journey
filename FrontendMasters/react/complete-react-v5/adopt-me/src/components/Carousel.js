import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(photo => photo.large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              key={index}
              data-index={index}
              className={index === active ? 'active' : ''}
              onClick={e => {
                this.setState({ active: +e.target.dataset.index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
