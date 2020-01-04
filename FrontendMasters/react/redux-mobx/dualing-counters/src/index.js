import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const CounterContext = createContext();

class CounterProvider extends Component {
  state = { countA: 0, countB: 0 };

  incrementA = () => this.setState(({ countA }) => ({ countA: countA + 1 }));
  incrementB = () => this.setState(({ countB }) => ({ countB: countB + 1 }));

  render() {
    const { incrementA, incrementB } = this;
    const { countA, countB } = this.state;
    const value = { countA, countB, incrementA, incrementB };

    return (
      <CounterContext.Provider value={value}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

const Counter = ({ count, increment, name }) => {
  console.log('Rendering', name);
  return (
    <button onClick={increment}>
      Increment {name} ({count})
    </button>
  );
};

function Application() {
  return (
    <CounterContext.Consumer>
      {({ countA, countB, incrementA, incrementB }) => (
        <section>
          <Counter count={countA} name="A" increment={incrementA} />
          <Counter count={countB} name="B" increment={incrementB} />
        </section>
      )}
    </CounterContext.Consumer>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CounterProvider>
    <Application />
  </CounterProvider>,
  rootElement
);
