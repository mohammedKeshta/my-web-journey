import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({
      query: query.trim()
    });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    let showContacts = contacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showContacts = contacts.filter(contact => match.test(contact.name));
    }

    showContacts.sort(sortBy("name"));
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            type="text"
            className="search-contacts"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {showContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showContacts.length} of {contacts.length}{" "}
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className="contact-list">
          {showContacts.map(contact => (
            <li className="contact-list-item" key={contact.id}>
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
