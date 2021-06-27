import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';
import UserModel from '../../models/user.model';

const routes = Router();
const userModel = new UserModel();

routes.post('/', async (req: Request, res: Response) => {
  try {
    const user = await userModel.create(req.body);
    const token = jwt.sign({ user }, config.tokenSecret as string);
    res.json({
      status: 'success',
      token,
      message: 'user created successfully'
    });
  } catch (err) {
    throw new Error(`Error at create user, ${err}`);
  }
});

routes.post('/authenticate', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.authenticate(username, password);
    const token = jwt.sign({ user }, config.tokenSecret as string);
    if (!user) {
      return res.json({
        status: 'success',
        message: 'the username and password do not match please try again'
      });
    }
    return res.json({
      status: 'success',
      token,
      message: 'user authenticated successfully'
    });
  } catch (err) {
    throw new Error(`Error at login user, ${err}`);
  }
});

export default routes;
