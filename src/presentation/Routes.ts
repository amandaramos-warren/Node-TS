import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import IController from '../interfaces/presentation/IController';
import IUserRoutes from '../interfaces/presentation/IUserRoutes';
import { MiddlewareType } from '../interfaces/presentation/MiddlewareType';

@injectable()
export default class UserRoutes implements IUserRoutes {
  userCreateController: IController;
  userListController: IController;
  router: Router;
  userMiddleware: MiddlewareType;
  constructor(
    @inject('UserCreateController') userCreateController: IController,
    @inject('UserListController') userListController: IController,
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
