const { Component } = React;

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: "1rem" }}>
        <img src={profile.avatar_url} alt="github-profile" />
        <div className="info">
          <div className="name">{profile.login}</div>
        </div>
      </div>
    );
  }
}

const CardList = ({ profiles }) => {
  return (
    <div className="cards-list">
      {profiles.map(profile => (
        <Card {...profile} key={profile.id} />
      ))}
    </div>
  );
};

class Form extends Component {
  state = { userName: "" };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(response => response.json())
      .then(users => {
        onSubmit(users);
        this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ profiles: users });
      });
  }

  addNewProfile = user => {
    this.setState(prevState => ({ profiles: [user, ...prevState.profiles] }));
  };

  render() {
    const { title } = this.props;
    const { profiles } = this.state;
    return (
      <div>
        <div className="header">{title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={profiles} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);
