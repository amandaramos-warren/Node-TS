import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserListController from '../interfaces/IUserListController'
import IUserCreateController from '../interfaces/IUserCreateController'
import IUserRoutes from '../interfaces/IUserRoutes'
import userMiddleware from '../middlewares/userMiddleware'

@injectable()
export default class UserRoutes implements IUserRoutes {
  userCreateController: IUserCreateController
  userListController: IUserListController
  router: Router
  constructor (@inject('UserCreateController')userCreateController: IUserCreateController,
  @inject('UserListController')userListController: IUserListController,
  @inject('Router')Router: Router) {
    this.userCreateController = userCreateController
    this.userListController = userListController
    this.router = Router
    this.routes()
  }

  async routes (): Promise<void> {
    this.router.post('/customer', userMiddleware, this.userCreateController.handle)
    this.router.get('/get', this.userListController.handle)
  }
}
