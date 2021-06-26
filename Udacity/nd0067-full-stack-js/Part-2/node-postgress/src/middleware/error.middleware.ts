import { Response, Request, NextFunction } from 'express';
import HttpException from '../exceptions/http.exception';

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Whoops!! something went wrong';
  res.status(status).json({ status, message });
};

export default errorMiddleware;
