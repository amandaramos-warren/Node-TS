import { Router } from 'express'
import { container } from 'tsyringe'
import UserHelper from '../domain/user/helper/UserHelper'
import ListService from '../domain/user/services/ListService'
import UserService from '../domain/user/services/UserService'
import IListService from '../domain/user/interfaces/IListService'
import IUserHelper from '../domain/user/interfaces/IUserHelper'
import ListController from '../presentation/controllers/ListController'
import UserController from '../presentation/controllers/UserController'
import IUserService from '../domain/user/interfaces/IUserService'
import IListController from '../domain/user/interfaces/IListController'
import IUserController from '../domain/user/interfaces/IUserController'

container.registerSingleton<IUserController>(
  'UserController',
  UserController
)

container.registerSingleton<IListController>(
  'ListController',
  ListController
)

container.register<Router>(
  'Router',
  { useValue: Router() }
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
