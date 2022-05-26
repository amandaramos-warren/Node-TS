import { Router } from 'express'
import UserController from './controllers/UserController'
// import schemaBody from '../middlewares/JoiRoutes';

const router = Router()

router.post('/customer', UserController.handle)
// router.get()

export { router }
