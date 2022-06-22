import { Router } from 'express'
import { container } from 'tsyringe'
import UserHelper from '../domain/user/helper/UserHelper'
import UserService from '../domain/user/services/UserService'
import ListController from '../presentation/controllers/ListController'
import UserController from '../presentation/controllers/UserController'

container.registerSingleton<UserController>(
  'UserController',
  UserController
)

container.registerSingleton<ListController>(
  'ListController',
  ListController
)

container.register<Router>(
  'Router',
  { useValue: Router() }
)

container.registerSingleton<UserService>(
  'UserService',
  UserService
)

container.registerSingleton<UserHelper>(
  'UserHelper',
  UserHelper
)
