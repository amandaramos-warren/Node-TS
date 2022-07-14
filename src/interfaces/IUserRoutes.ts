import { Router } from 'express';
import IListController from './IUserListController';
import IUserController from './IUserCreateController';

export default interface IUserRoutes {
  userCreateController: IUserController;
  userListController: IListController;
  router: Router;
  routes(): void;
}
