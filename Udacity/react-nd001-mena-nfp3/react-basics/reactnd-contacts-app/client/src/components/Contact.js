import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ contact, onDeleteContact }) => (
  <li className={'contact-list-item'}>
    <div
      className="contact-avatar"
      style={{ backgroundImage: `url(${contact.avatarURL})` }}
    />
    <div className="contact-details">
      <p>{contact.name}</p>
      <p>{contact.handle}</p>
    </div>
    <div
      className="contact-remove"
      onClick={() => {
        onDeleteContact(contact)
      }}
    >
      remove
    </div>
  </li>
)

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    handle: PropTypes.string,
    avatarURL: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contact
