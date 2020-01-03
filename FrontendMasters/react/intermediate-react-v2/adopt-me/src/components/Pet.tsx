import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
  media: Photo[];
}
const Pet: FunctionComponent<IProps> = props => {
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
