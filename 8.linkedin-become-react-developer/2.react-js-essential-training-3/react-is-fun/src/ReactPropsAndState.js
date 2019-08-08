import React, { Component } from 'react';

const bookList = [
  { title: 'The Sun Also Rises', author: 'Ernest Hemingway', page: 260 },
  { title: 'White Teeth', author: 'Zadie Smith', page: 230 },
  { title: "Cat's Cradle", author: 'Kurt Vonnegut', page: 430 },
  { title: 'Johnny to center', author: 'Mohammed Elzanaty', page: 83 }
];

const Hiring = () => (
  <div>
    The Library now is hiring Please Fill this <a href="/">Form</a>
  </div>
);

const NotHiring = () => (
  <div>
    The Library now is <strong>NOT</strong> hiring Please come back later
  </div>
);

const Book = ({ title, author, pages, freeBookMark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>The Book is Free Mark: {freeBookMark ? 'yes!' : 'no'}</p>
    </section>
  );
};

class Library extends Component {
  state = { open: true, freeBookMark: true, hiring: false };

  handleChangeClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  render() {
    const { bookList } = this.props;
    const { open, freeBookMark, hiring } = this.state;
    return (
      <div>
        {hiring ? <Hiring /> : <NotHiring />}
        <h1>The Library is {open ? 'Opened' : 'Closed'}</h1>
        <button onClick={this.handleChangeClick}>
          {open ? 'Close' : 'Open'} Library
        </button>
        {bookList.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            pages={book.page}
            freeBookMark={freeBookMark}
          />
        ))}
      </div>
    );
  }
}

const ReactPropsAndState = () => {
  return (
    <div>
      <Library bookList={bookList} />
    </div>
  );
};

export default ReactPropsAndState;
