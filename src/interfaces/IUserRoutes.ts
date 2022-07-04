import { Router } from 'express'
import IListController from './IListController'
import IUserController from './IUserController'

export default interface IUserRoutes{
  userController: IUserController
  listController: IListController
  router: Router
  routes(): Promise<void>
}
