import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import { Contact } from '../components'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
  static defaultProps = {
    contacts: [],
  }
  static protoTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }

  state = {
    query: '',
  }

  handleSearchContact = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }))
  }

  clearQuery = () => {
    this.handleSearchContact('')
  }

  render() {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    const showingContacts =
      query === ''
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          )

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contact"
            value={query}
            onChange={(event) => {
              this.handleSearchContact(event.target.value)
            }}
          />
          <Link to="/create" className="add-contact">
            Add Contact
          </Link>
        </div>


        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ol className={'contact-list'}>
          {showingContacts.sort(sortBy('-createdAt')).map((contact) => (
            <Contact
              key={`${contact.id}-${Math.random() * 10}`}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
