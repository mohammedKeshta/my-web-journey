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
    const { handlePick } = this.props;
    return (
      <div>
        <button onClick={handlePick}>What should I do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    const { options, handleOnRemoveAll } = this.props;

    return (
      <div>
        <button onClick={handleOnRemoveAll}>❌ Remove All</button>

        {options.length > 0 ? (
          options.map((option, index) => (
            <Option optionText={option} key={`option-${index}`} />
          ))
        ) : (
          <h1>There's no options right now ... try add one</h1>
        )}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    const { optionText } = this.props;
    return (
      <div>
        <p>{optionText}</p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    const { handleAddOption, handleChange, option } = this.props;
    return (
      <div>
        <form onSubmit={handleAddOption}>
          <input
            type="text"
            name="option"
            onChange={handleChange}
            onBlur={handleChange}
            value={option}
          />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hand of a computer.',
      options: ['Thing One', 'Thing Two', 'Thing Three'],
      option: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleOnRemoveAll = this.handleOnRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddOption(e) {
    e.preventDefault();
    const { option, options } = this.state;
    this.setState({ options: [...options, option], option: '' });
  }

  handleOnRemoveAll() {
    this.setState({ options: [] });
  }

  handlePick() {
    console.log(this);
  }

  render() {
    const { title, subtitle, options, option } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} />
        <Options options={options} handleOnRemoveAll={this.handleOnRemoveAll} />
        <AddOption
          handleAddOption={this.handleAddOption}
          handleChange={this.handleChange}
          option={option}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
