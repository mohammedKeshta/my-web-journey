import express from 'express';
import booksRoutes from './api/books';
import usersRoutes from './api/users';

const routes = express.Router();

routes.use('/books', booksRoutes);
routes.use('/users', usersRoutes);

export default routes;
