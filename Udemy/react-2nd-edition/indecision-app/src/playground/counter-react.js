const React = React;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // increment counter by one
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // decrement counter by one
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // reset counter
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Count: {count}</h1>
        <button onClick={this.increment} style={{ marginRight: '10px' }}>
          ➕1
        </button>
        <button onClick={this.decrement} style={{ marginRight: '10px' }}>
          ➖1
        </button>
        <button onClick={this.reset}>🔪 Reset</button>
      </>
    );
  }
}
// Render Component
ReactDOM.render(<Counter />, document.getElementById('root'));
