import React, { Component } from 'react';
import './App.css';

let skyData = {
  total: 50,
  powder: 20,
  backCountry: 10,
  goal: 100
};

class SkyDayCounter extends Component {
  getPercent = decimal => decimal * 100 + '%';

  calcGoalProgress(total, goal) {
    return this.getPercent(total / goal);
  }
  render() {
    const { total, powder, backCountry, goal } = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total} </p>
        </div>
        <div>
          <p>Powder Days: {powder} </p>
        </div>
        <div>
          <p>BackCountry Days: {backCountry} </p>
        </div>
        <div>
          <p>Goal Progress Days: {this.calcGoalProgress(total, goal)} </p>
        </div>
      </section>
    );
  }
}

class Message extends Component {
  render() {
    const { message, color } = this.props;
    return (
      <div>
        <h1 style={{ color, fontSize: '30px' }}>{message}</h1>
      </div>
    );
  }
}

const ReactComponent = () => {
  return (
    <div className="App">
      <Message message="How are you" color="orange" />

      <SkyDayCounter
        total={skyData.total}
        powder={skyData.powder}
        backCountry={skyData.backCountry}
        goal={skyData.goal}
      />
    </div>
  );
};

export default ReactComponent;
