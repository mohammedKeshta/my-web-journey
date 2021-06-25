import express from 'express';
import booksRoutes from './api/books';

const routes = express.Router();

routes.use('/books', booksRoutes);

export default routes;
