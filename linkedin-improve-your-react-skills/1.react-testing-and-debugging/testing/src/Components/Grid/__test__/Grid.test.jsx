import React from 'react';
import renderer from 'react-test-renderer';
import data from '../../../courses_db';
import Grid from '../Grid';

test('Grid SnapShot Test', () => {
  const component = renderer.create(<Grid items={data} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Numbers
const numberOfCourses = data.length;

describe('Number Tests ', () => {
  test('Numbers Of Items Equal 12', () => {
    expect(numberOfCourses).toBe(12);
  });

  test('Numbers of Items to be Greater Than or Equal 12', () => {
    expect(numberOfCourses).toBeGreaterThanOrEqual(12);
  });
});

// Strings
const firstCourse = data[0];

describe('Strings Tests ', () => {
  test('Title of First Course Contain', () => {
    expect(firstCourse.title).toContain('ReactJS');
  });

  test('Building an App with ReactJS and MeteorJS', () => {
    expect(firstCourse.title).toMatch(/JS/);
  });

  test('Building an App with ReactJS and MeteorJS', () => {
    expect(firstCourse.title).not.toMatch(/zanaty/);
  });
});


// Arrays
const coursesCategory = ['react', 'native', 'framer', 'typescript'];

describe('Arrays Tests ', () => {
  test('The Courses Category has framer on it', () => {
    expect(coursesCategory).toContain('framer');
  });
});
