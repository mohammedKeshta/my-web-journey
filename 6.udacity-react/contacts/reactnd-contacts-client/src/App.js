import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import { getAll, remove } from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    getAll().then(contacts => {
      this.setState({ contacts });
    });
  }

  handleRemoveContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contact.id)
    }));
    remove(contact);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={contacts}
              onDeleteContact={this.handleRemoveContact}
            />
          )}
        />

        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
