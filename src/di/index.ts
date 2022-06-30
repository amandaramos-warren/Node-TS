import { Router } from 'express'
import { container } from 'tsyringe'
import UserHelper from '../domain/user/helper/UserHelper'
import ListService from '../domain/user/services/ListService'
import UserService from '../domain/user/services/UserService'
import IListService from '../interfaces/IListService'
import IUserHelper from '../interfaces/IUserHelper'
import ListController from '../presentation/controllers/ListController'
import UserController from '../presentation/controllers/UserController'
import IUserService from '../interfaces/IUserService'
import IListController from '../interfaces/IListController'
import IUserController from '../interfaces/IUserController'

container.register<Router>(
  'Router',
  { useValue: Router() }
)

container.registerSingleton<IUserController>(
  'UserController',
  UserController
)

container.registerSingleton<IListController>(
  'ListController',
  ListController
)

container.registerSingleton<IUserService>(
  'UserService',
  UserService
)

container.registerSingleton<IListService>(
  'ListService',
  ListService
)

container.registerSingleton<IUserHelper>(
  'UserHelper',
  UserHelper
)
