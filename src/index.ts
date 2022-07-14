import 'reflect-metadata';
import './di/index';
import express from 'express';
import UserRoutes from './presentation/Routes';
import { container } from 'tsyringe';

const app = express();

app.use(express.json());
app.use(container.resolve(UserRoutes).router);

app.listen(3000, () => {
  console.log('Server is running on port 3000, localhost:3000');
});
