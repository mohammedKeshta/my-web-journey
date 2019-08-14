import { createStore } from 'redux/es/redux';
import Reducer, { initialState } from './reducer';

const ConfigureStore = () => {
  return createStore(Reducer, initialState);
};

export default ConfigureStore;
