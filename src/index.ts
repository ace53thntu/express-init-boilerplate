import express, { Express, NextFunction, Request, Response } from 'express';
import router from './routes';

const app: Express = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Hello world!');
  } catch (error) {
    next(error);
  }
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
