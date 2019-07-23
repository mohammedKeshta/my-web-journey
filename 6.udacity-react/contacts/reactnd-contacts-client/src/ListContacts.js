import React, { Component } from 'react';

class ListContacts extends  Component {


  render() {
    console.log('Props', this.props);
    return (
      <div>
        <ol className='contact-list'>

        </ol>
      </div>
    );
  }

}

export default ListContacts;
