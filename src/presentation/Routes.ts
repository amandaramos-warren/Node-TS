import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.post("/customer", UserController.handle);

export { router };
