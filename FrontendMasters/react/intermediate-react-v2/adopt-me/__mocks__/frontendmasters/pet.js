import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const breeds = [
  { name: 'Bichon Frise' },
  { name: 'Bolognese' },
  { name: 'Bolonka' },
  { name: 'Coton de Tulear' },
  { name: 'Havanese' },
  { name: 'Lowchen' },
  { name: 'Maltese' },
];

const json = readFileSync(path.join(__dirname, '/res.json'));
const dogs = JSON.parse(json);

export const ANIMALS = ['dog', 'cat', 'bird'];
export const _breed = breeds;
export const _dogs = dogs.ANIMALS;

const mock = {
  breeds: jest.fn(() => ({
    then: callback => act(() => callback({ breeds })),
  })),
  animals: jest.fn(() => ({
    then: callback => act(() => callback({ dogs })),
  })),
};

export default mock;
