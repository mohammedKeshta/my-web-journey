import { Book } from '../models/book.model';

const formatBook = (book: {
  id?: number | undefined;
  title: string;
  author: string;
  /* eslint-disable camelcase */
  total_pages?: number | undefined;
  type: string;
  summary: string;
}): Book => ({
  id: book.id,
  title: book.title,
  author: book.author,
  type: book.type,
  summary: book.summary,
  totalPages: book.total_pages
});

export default formatBook;
