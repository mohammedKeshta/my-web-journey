import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Error from '../interfaces/error.interface';
import config from '../config';

const validateTokenMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization');
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      if (token && bearer === 'bearer') {
        const decoded = jwt.verify(token, config.tokenSecret as string);
        if (decoded) {
          next();
        }
      }
    }
  } catch (err) {
    const error: Error = new Error('Login Error, Please login again');
    error.status = 401;
    next(error);
  }
};

export default validateTokenMiddleware;
