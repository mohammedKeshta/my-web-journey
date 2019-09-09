import data from '../../../courses_db';

// Numbers
const numberOfCourses = data.length;

test('Numbers Of Items Equal 12', () => {
  expect(numberOfCourses).toBe(12);
});

test('Numbers of Items to be Greater Than or Equal 12', () => {
  expect(numberOfCourses).toBeGreaterThanOrEqual(12);
});

// Strings
const firstCourse = data[0];

test('Title of First Course Contain', () => {
  expect(firstCourse.title).toContain('ReactJS');
});

test('Building an App with ReactJS and MeteorJS', () => {
  expect(firstCourse.title).toMatch(/JS/);
});

test('Building an App with ReactJS and MeteorJS', () => {
  expect(firstCourse.title).not.toMatch(/zanaty/);
});

// Arrays
const coursesCategory = ['react', 'native', 'framer', 'typescript'];
test('The Courses Category has framer on it', () => {
  expect(coursesCategory).toContain('framer');
});
