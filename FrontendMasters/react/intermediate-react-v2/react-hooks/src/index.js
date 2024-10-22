import React from 'react';
import ReactDOM from 'react-dom';
import State from './State';
import Effect from './Effect';
import Context from './Context';
import ContextAlligator from './ContextAlligator';
import Ref from './Ref';
import Reducer from './Reducer';
import Memo from './Memo';
import Callback from './Callback';
import LayoutEffect from './LayoutEffect';
import ImperativeHandle from './ImperativeHandle';
import ReducerDoc from './ReducerDoc';

import './styles.css';

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <ContextAlligator />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <ReducerDoc />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
      <hr />
      <ImperativeHandle />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
