import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import { create, getAll, remove } from "./utils/ContactsAPI";
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

  handleCreateContact = contact => {
    create(contact).then(contact => {
      this.setState(prevState => ({
        contacts: prevState.contacts.concat([contact])
      }));
    });
    console.log(this.props);
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

        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.handleCreateContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
