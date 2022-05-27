import { Router } from 'express'
import userMiddleware from '../middlewares/userMiddleware'
import UserController from './controllers/UserController'

const router = Router()

router.post('/customer',userMiddleware, UserController.handle)
// router.get()

export { router }
