import React from "react";
import PropTypes from "prop-types";

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ol className="contact-list">
        {contacts.map(contact => (
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
};

ListContacts.propTypes = {
  contacts : PropTypes.array,
  onDeleteContact: PropTypes.func
};
export default ListContacts;
