import { Response, Request, NextFunction } from 'express';
import Error from '../interfaces/error.interface';

const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Whoops!! something went wrong';
  res.status(status).json({ status, message });
};

export default errorMiddleware;
