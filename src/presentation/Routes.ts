import { Router } from 'express'
import userMiddleware from '../middlewares/userMiddleware'
import ListController from './controllers/ListController'
import UserController from './controllers/UserController'

const router = Router()

router.post('/customer',userMiddleware, UserController.handle)
router.get('/get', ListController.handle)

export { router }
