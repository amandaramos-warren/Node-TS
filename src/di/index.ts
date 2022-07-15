import { Router } from 'express';
import { container } from 'tsyringe';
import UserHelper from '../domain/user/helper/UserHelper';
import UserListService from '../domain/user/services/UserListService';
import UserCreateService from '../domain/user/services/UserCreateService';
import IUserListService from '../interfaces/IUserListService';
import IUserHelper from '../interfaces/IUserHelper';
import UserListController from '../presentation/controllers/UserListController';
import UserCreateController from '../presentation/controllers/UserCreateController';
import IUserCreateService from '../interfaces/IUserCreateService';
import IUserListController from '../interfaces/IUserListController';
import IUserCreateController from '../interfaces/IUserCreateController';
import IUserRepository from '../interfaces/IUserRepository';
import UserRepository from '../domain/user/repository/UserRepository';
import IUserValidation from '../interfaces/IUserValidation';
import UserValidation from '../domain/user/helper/UserValidation';

container.register<Router>('Router', { useValue: Router() });

container.registerSingleton<IUserCreateController>(
  'UserCreateController',
  UserCreateController,
);

container.registerSingleton<IUserListController>(
  'UserListController',
  UserListController,
);

container.registerSingleton<IUserCreateService>(
  'UserCreateService',
  UserCreateService,
);

container.registerSingleton<IUserListService>(
  'UserListService',
  UserListService,
);

container.registerSingleton<IUserValidation>('UserValidation', UserValidation);

container.registerSingleton<IUserHelper>('UserHelper', UserHelper);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
