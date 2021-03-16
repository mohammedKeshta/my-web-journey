import React, { Component } from 'react'
import { ListContacts, CreateContact } from './containers'
import { create, getAll, remove } from './utils/ContactsAPI'
import { Route, withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    this.fetchContacts()
  }

  fetchContacts = () => {
    getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }))
    })
  }

  handleDeleteContact(contact) {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => c.id !== contact.id),
    }))
    remove(contact).catch((err) => console.log(err))
  }

  handleCreateContact(contact) {

    create(contact).then(contact => {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }))
    }).catch((err) => console.log(err))
    this.props.history.push('/')
  }

  render() {
    return (<div>
      <Route
        path="/"
        exact
        render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.handleDeleteContact.bind(this)}
          />
        )}
      />
      <Route
        path="/create"
        render={() => (
          <CreateContact
            onCreateContact={this.handleCreateContact.bind(this)}
          />
        )}
      />
    </div>)
  }
}

export default withRouter(App)

