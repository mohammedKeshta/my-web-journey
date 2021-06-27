import express from 'express';
import validateTokenMiddleware from '../middleware/authentication.middleware';
import booksRoutes from './api/books';
import usersRoutes from './api/users';

const routes = express.Router();

routes.use('/books', validateTokenMiddleware, booksRoutes);
routes.use('/users', usersRoutes);

export default routes;
