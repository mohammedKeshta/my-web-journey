import React from 'react';
import { ANIMALS, _dogs, _breed } from '@frontendmasters/pet';
import { SearchParams } from '../components/SearchParams';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

test('Search Params', async () => {
  const { getByTestId } = render(<SearchParams /> );
  const animalDropDown = getByTestId('use-dropdown-animal');
  expect(animalDropDown.children.length).toEqual(ANIMALS.length + 1);
});
