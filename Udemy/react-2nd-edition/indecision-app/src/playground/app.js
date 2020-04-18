/*
const React = React;
const { render } = ReactDOM;

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = (props) => {
  const { handlePick, hasOptions } = props;
  return (
    <div>
      <button onClick={handlePick} disabled={hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = ({ options, handleOnRemove }) => {
  return (
    <div>
      <button onClick={handleOnRemove}>❌ Remove All</button>

      {options.length > 0 ? (
        options.map((option, index) => (
          <div style={{'display': 'flex'}}>
            <Option optionText={option} key={`option-${index}`} />
            <button type="button" onClick={() => handleOnRemove(option)}>
              ❌
            </button>
          </div>
        ))
      ) : (
        <h1>There's no options right now ... try add one</h1>
      )}
    </div>
  );
};

const Option = ({ optionText }) => {
  return (
    <div>
      <p>{optionText}</p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const error = this.props.handleAddOption(this.state.option.trim());
    this.setState(() => ({ error }));
  }

  render() {
    const { error, option } = this.state;
    return (
      <div>
        {error && <h1>{error}</h1>}
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="option"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            onFocus={() => this.setState(() => ({ error: '', option: '' }))}
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
      subtitle: 'Put your life in the hand of a computer.',
      options: this.props.options,
    };
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    try {
      const jsonStr = localStorage.getItem('options');
      const options = JSON.parse(jsonStr);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  handleOnRemove(id) {
    this.setState((prevState) => ({
      options:
        typeof id === 'string'
          ? prevState.options.filter((option) => option !== id)
          : [],
    }));
  }

  handlePick() {
    const { options } = this.state;
    const randomIndex = Math.floor(Math.random() * options.length);
    const option = options[randomIndex];
    alert(option);
  }

  handleAddOption(option) {
    const { options } = this.state;

    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This item already exist please enter another option';
    }

    this.setState((prevState) => {
      return { options: [...prevState.options, ...[option]] };
    });
  }

  render() {
    const { subtitle, options } = this.state;
    const hasOptions = options.length === 0;

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={hasOptions} />
        <AddOption handleAddOption={this.handleAddOption} />
        <Options options={options} handleOnRemove={this.handleOnRemove} />
      </div>
    );
  }
}

App.defaultProps = {
  options: [],
};

render(<App />, document.getElementById('root'));
*/
