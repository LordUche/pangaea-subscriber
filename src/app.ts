import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());

app.post('/test1', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/test2', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send('Something went wrong!');
});

export default app;
