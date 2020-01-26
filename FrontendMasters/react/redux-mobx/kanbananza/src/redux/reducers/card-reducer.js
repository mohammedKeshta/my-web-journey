import { cards as initialCardsState } from '../../normalized-state';

const cardsReducer = (cards = initialCardsState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return cards;
  }
};



export default cardsReducer;