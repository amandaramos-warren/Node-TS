import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import IListController from '../interfaces/IListController'
import IUserController from '../interfaces/IUserController'
import IUserRoutes from '../interfaces/IUserRoutes'
import userMiddleware from '../middlewares/userMiddleware'

@injectable()
export default class UserRoutes implements IUserRoutes {
  userController: IUserController
  listController: IListController
  router: Router
  constructor (@inject('UserController')userController: IUserController,
  @inject('ListController')listController: IListController,
  @inject('Router')Router: Router) {
    this.userController = userController
    this.listController = listController
    this.router = Router
    this.routes()
  }

  async routes (): Promise<void> {
    this.router.post('/customer', userMiddleware, this.userController.handle)
    this.router.get('/get', this.listController.handle)
  }
}
