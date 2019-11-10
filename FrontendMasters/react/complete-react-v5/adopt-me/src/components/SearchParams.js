import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'Dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreed('');
    setBreeds([]);

    pet.breeds(animal).then(({ breeds }) => {
      console.log(breeds);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  return (
    <form>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="label" htmlFor="location">
                Location
              </label>
              <input
                className="input"
                type="text"
                placeholder="Location"
                id="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <AnimalDropdown />
        </div>
        <div className="column">
          <BreedDropdown />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-danger">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchParams;
