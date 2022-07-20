import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import IUserListController from '../interfaces/presentation/IUserListController';
import IUserCreateController from '../interfaces/presentation/IUserCreateController';
import IUserRoutes from '../interfaces/presentation/IUserRoutes';
import { MiddlewareType } from '../interfaces/presentation/MiddlewareType';

@injectable()
export default class UserRoutes implements IUserRoutes {
  userCreateController: IUserCreateController;
  userListController: IUserListController;
  router: Router;
  userMiddleware: MiddlewareType;
  constructor(
    @inject('UserCreateController') userCreateController: IUserCreateController,
    @inject('UserListController') userListController: IUserListController,
    @inject('userMiddleware') userMiddleware: MiddlewareType,
    @inject('Router') Router: Router
  ) {
    this.userCreateController = userCreateController;
    this.userListController = userListController;
    this.userMiddleware = userMiddleware;
    this.router = Router;
    this.routes();
  }

  routes(): void {
    this.router.post(
      '/customer',
      this.userMiddleware,
      this.userCreateController.handle
    );
    this.router.get('/get', this.userListController.handle);
  }
}
