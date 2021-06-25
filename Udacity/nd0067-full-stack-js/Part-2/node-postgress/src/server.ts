import express, { Application, Response, Request } from 'express';
import morgan from 'morgan';
import config from './config';
import routes from './routes';

const app: Application = express();

const address: string = `0.0.0.0:${config.port}`;

app.use(express.json());
app.use(morgan('dev'));

// add routing for /api path
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello, world'
  });
});

app.listen(config.port, () => {
  console.log(`starting app on  ${address}`);
});
