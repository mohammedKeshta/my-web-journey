import { users as initialUsersState } from '../../normalized-state';

const usersReducer = (users = initialUsersState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return users;
  }
};

export default usersReducer;
