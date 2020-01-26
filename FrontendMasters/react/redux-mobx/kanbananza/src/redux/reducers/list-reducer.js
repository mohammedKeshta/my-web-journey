import { lists as initialListsState } from '../../normalized-state';

const listsReducer = (lists = initialListsState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return lists;
  }
};

export default listsReducer;
