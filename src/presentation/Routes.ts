import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import userMiddleware from '../middlewares/userMiddleware'
import ListController from './controllers/ListController'
import UserController from './controllers/UserController'

@injectable()
export default class UserRoutes {
  userController: UserController
  listController: ListController
  router: Router
  constructor (@inject('UserController')userController: UserController,
  @inject('ListController')listController: ListController,
  @inject('Router')Router: Router) {
    this.userController = userController
    this.listController = listController
    this.router = Router
    this.routes()
  }

  async routes () {
    this.router.post('/customer', userMiddleware, this.userController.handle)
    this.router.get('/get', this.listController.handle)
  }
}
