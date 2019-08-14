import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    const { onCreateContact } = this.props;
    const values = serializeForm(e.target, { hash: true });
    if (onCreateContact) onCreateContact(values);
  };

  render() {
    return (
      <div className="create-contact">
        <Link to="/" className="close-create-contact">
          {" "}
          Close{" "}
        </Link>
        <form onSubmit={this.handleOnSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
