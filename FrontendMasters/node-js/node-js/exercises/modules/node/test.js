const { users, posts } = require('./data');
const { getPostsForUser, getUserById } = require('./api');
const { showPostsForCurrentUser, showUserProfile } = require('./app');

describe('data', () => {
  test('users', () => {
    expect(users).toHaveLength(1);
  });
  test('posts', () => {
    expect(posts).toHaveLength(3);
  });
});

describe('api', () => {
  test('getUserById', done => {
    expect.assertions(1);
    getUserById(1, user => {
      expect(user.id).toBe(1);
      done();
    });
  });
  test('getPostsForUser', done => {
    getPostsForUser(1, posts => {
      expect(posts).toHaveLength(3);
      posts.forEach(post => {
        expect(post.createdBy).toBe(1);
      });
      done();
    });
  });
});

describe('app', () => {
  test('showPostsForCurrentUser', done => {
    showPostsForCurrentUser(1, posts => {
      expect(posts).toHaveLength(3);
      done();
    });
  });

  test('showUserProfile', done => {
    showUserProfile(1, profile => {
      expect(profile).toBeTruthy();
      done();
    });
  });
});
