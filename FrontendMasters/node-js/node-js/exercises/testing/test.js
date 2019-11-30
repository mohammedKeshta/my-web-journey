const { users, findUser, deleteUser, getUsers } = require('./users');

describe('users', () => {
  test('users data', () => {
    expect(users).toHaveLength(20);
  });

  test('get all users', done => {
    const users = getUsers();
    expect(users.length).toBe(20);
    done();
  });

  test('get user with specific id', async done => {
    const user = await findUser(1);
    expect(user.id).toBe(1);
    done();
  });

  test('delete user with specific id', async done => {
    const user = await findUser(1);
    const deletedUser = await deleteUser(user.id);
    expect(deletedUser.id).toBe(1);
    done();
  });
});
