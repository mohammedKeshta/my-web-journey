import React from 'react';
import renderer from 'react-test-renderer';
import Single from '../Single';
import data from '../../../courses_db';

test('Single SnapShot Test', () => {
  const component = renderer.create(<Single item={data[0]} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
