import { Request, Response, Router } from 'express';
import BookStore from '../../models/book';

const routes = Router();
const store = new BookStore();

routes.get('/', async (req: Request, res: Response) => {
  try {
    const books = await store.index();
    res.json({
      status: 'success',
      data: books,
      message: 'Books retrieved successfully'
    });
  } catch (err) {
    throw new Error(`Error at getting books, ${err}`);
  }
});

routes.get('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await store.show(bookId);
    res.json({
      status: 'success',
      data: book,
      message: 'Book retrieved successfully'
    });
  } catch (err) {
    throw new Error(`Could not find book, ${err}`);
  }
});

routes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await store.delete(bookId);

    res.json({
      status: 'success',
      message: `Book with ID: ${book.id} deleted successfully`
    });
  } catch (err) {
    throw new Error(`Could not delete book, ${err}`);
  }
});

routes.post('/', async (req: Request, res: Response) => {
  try {
    const { title, author, totalPages, type, summary } = req.body;
    const book = await store.create(title, author, totalPages, type, summary);

    res.json({
      status: 'success',
      data: book,
      message: 'New book added successfully'
    });
  } catch (err) {
    throw new Error(`Error at adding books, ${err.message}`);
  }
});

export default routes;
