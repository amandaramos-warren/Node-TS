import { Router } from 'express';
import { container } from 'tsyringe';
import UserHelper from '../domain/user/helper/UserHelper';
import UserListService from '../domain/user/services/UserListService';
import UserCreateService from '../domain/user/services/UserCreateService';
import IUserListService from '../interfaces/domain/IUserListService';
import IUserHelper from '../interfaces/domain/IUserHelper';
import UserListController from '../presentation/controllers/UserListController';
import UserCreateController from '../presentation/controllers/UserCreateController';
import IUserCreateService from '../interfaces/domain/IUserCreateService';
import IController from '../interfaces/presentation/IController';
import IUserRepository from '../interfaces/domain/IUserRepository';
import UserRepository from '../domain/user/repository/UserRepository';
import IUserValidation from '../interfaces/domain/IUserValidation';
import UserValidation from '../domain/user/helper/UserValidation';
import { MiddlewareType } from '../interfaces/presentation/MiddlewareType';
import userMiddleware from '../middlewares/userMiddleware';

container.register<Router>('Router', { useValue: Router() });

container.registerSingleton<IController>(
  'UserCreateController',
  UserCreateController
);

container.registerSingleton<IController>(
  'UserListController',
  UserListController
);

container.register<MiddlewareType>('userMiddleware', {
  useValue: userMiddleware,
});

container.registerSingleton<IUserCreateService>(
  'UserCreateService',
  UserCreateService
);

container.registerSingleton<IUserListService>(
  'UserListService',
  UserListService
);

container.registerSingleton<IUserValidation>('UserValidation', UserValidation);

container.registerSingleton<IUserHelper>('UserHelper', UserHelper);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
