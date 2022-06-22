import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import userMiddleware from '../middlewares/userMiddleware'
import ListController from './controllers/ListController'
import UserController from './controllers/UserController'

@injectable()
export default class UserRoutes {
  userController: UserController
  router: Router
  constructor (@inject('UserController')userController: UserController,
  @inject('Router')Router: Router) {
    this.userController = userController
    this.router = Router
    this.routes()
  }

  async routes () {
    console.log(this.userController.handle)
    this.router.post('/customer', userMiddleware, this.userController.handle)
  }
}
