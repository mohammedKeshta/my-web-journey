import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Main from './components/MainComponent';
import ConfigureStore from './redux/configureStore';

const store = ConfigureStore();
const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
