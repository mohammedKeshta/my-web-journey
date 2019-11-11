import React, { useState, useEffect, useContext } from 'react';
import useDropdown from './useDropdown';
import pet, { ANIMALS } from '@frontendmasters/pet';
import sortBy from 'sort-by';
import Results from './Results';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  const [theme, setTheme] = useContext(ThemeContext);
  async function requestPets() {
    const { animals } = await pet
      .animals({
        location,
        breed,
        tpye: animal
      })
      .catch(console.error);

    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const sortedBreed = (breeds || []).sort(sortBy('name'));
      const breedStrings = sortedBreed.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="columns">
      <div className="column">
        <form
          className="search-params "
          onSubmit={e => {
            e.preventDefault();
            requestPets();
          }}
        >
          <div className="field">
            <label className="label" htmlFor="theme">
              Theme
            </label>
            <div className="control">
              <div className="select">
                <select
                  value={theme}
                  onChange={e => setTheme(e.target.value)}
                  onBlur={e => setTheme(e.target.value)}
                >
                  <option value="peru">Peru</option>
                  <option value="darkblue">Dark Blue</option>
                  <option value="chartreuse">Chartreuse</option>
                  <option value="mediumorchid">Medium Orchid</option>
                  <option value="orange">Medium Orchid</option>
                  <option value="darkyellow">Medium Orchid</option>
                </select>
              </div>
            </div>
          </div>

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
          <AnimalDropdown />
          <BreedDropdown />
          <div className="field">
            <div className="control">
              <button
                className="button is-danger"
                style={{ backgroundColor: theme }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="column is-four-fifths">
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
