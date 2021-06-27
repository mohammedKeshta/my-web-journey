import BookStore, { Book } from '../../models/book.model';

const store = new BookStore();

describe('Book Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a book', async () => {
    const book = {
      title: 'Bridge to Terabithia',
      totalPages: 250,
      author: 'Katherine Paterson',
      type: 'children',
      summary: 'Summary of the book'
    };

    const addedBook: Book = await store.create(
      book.title,
      book.author,
      book.totalPages,
      book.type,
      book.summary
    );
    expect(addedBook).toEqual({
      id: addedBook.id,
      title: 'Bridge to Terabithia',
      totalPages: 250,
      author: 'Katherine Paterson',
      type: 'children',
      summary: 'Summary of the book'
    });
  });

  it('index method should return a list of books', async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        title: 'Bridge to Terabithia',
        totalPages: 250,
        author: 'Katherine Paterson',
        type: 'children',
        summary: 'Summary of the book'
      }
    ]);
  });

  it('show method should return the correct book', async () => {
    const result = await store.show('1');
    expect(result).toEqual({
      id: 1,
      title: 'Bridge to Terabithia',
      totalPages: 250,
      author: 'Katherine Paterson',
      type: 'children',
      summary: 'Summary of the book'
    });
  });

  it('delete method should remove the book', async () => {
    const deletedBook = await store.delete('1');
    expect(deletedBook.id).toEqual(1);
  });
});
