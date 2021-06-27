/* eslint-disable class-methods-use-this */
import db from '../database';
import formatBook from '../utils/formatBook';

export interface Book {
  id?: number;
  title: string;
  author: string;
  totalPages: number | undefined;
  type: string;
  summary: string;
}

class BookModel {
  async index(): Promise<Book[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM books';
      const result = await connection.query(sql);
      connection.release();
      const formatBooks = result.rows.map((book) => formatBook(book));
      return formatBooks || [];
    } catch (err) {
      throw new Error(`Error acquiring client ${err.message}`);
    }
  }

  async show(id: string): Promise<Book> {
    try {
      const sql = 'SELECT * FROM books WHERE id=($1)';

      const connection = await db.connect();

      const result = await connection.query(sql, [id]);

      connection.release();
      const book = formatBook(result.rows[0]);
      return book;
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`);
    }
  }

  async create(
    title: string,
    author: string,
    totalPages: number | undefined,
    type: string,
    summary: string
  ): Promise<Book> {
    try {
      const connection = await db.connect();
      const sql =
        'insert into books (title, author, total_pages, type, summary) values ($1, $2, $3, $4, $5) returning *';

      const result = await connection.query(sql, [title, author, totalPages, type, summary]);

      connection.release();

      const book = formatBook(result.rows[0]);
      return book;
    } catch (err) {
      throw new Error(`Error acquiring client ${err.message}`);
    }
  }

  async delete(id: string): Promise<Book> {
    try {
      const connection = await db.connect();
      const sql = 'DELETE FROM books WHERE id=($1) returning *';

      const result = await connection.query(sql, [id]);

      connection.release();

      const book = formatBook(result.rows[0]);
      return book;
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`);
    }
  }
}

export default BookModel;
