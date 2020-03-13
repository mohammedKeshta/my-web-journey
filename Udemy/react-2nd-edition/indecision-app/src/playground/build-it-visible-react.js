const { render } = ReactDOM;
const React = React;

class VisibleToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && <p>Hey, these are some details you can now see!</p>}
      </div>
    );
  }
}

render(<VisibleToggle />, document.getElementById('root'));
