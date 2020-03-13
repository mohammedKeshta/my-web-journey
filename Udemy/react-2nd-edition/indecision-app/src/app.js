const React = React;
const { render } = ReactDOM;

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    const { options } = this.props;

    return (
      <div>
        {options.map((option, index) => (
          <Option optionText={option} key={`option-${index}`} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    const { optionText } = this.props;
    return <p>{optionText}</p>;
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add Option</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand of a computer.';
    const options = ['Thing One', 'Thing Two', 'Thing Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
