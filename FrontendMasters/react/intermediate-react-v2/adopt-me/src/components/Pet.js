import React from 'react';
import { Link } from '@reach/router';

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;

  let hero = 'http://placecorgi.com/300/300';
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>{`${animal} — ${breed} — ${location}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
