import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IController from '../../interfaces/presentation/IController';
import IUserListService from '../../interfaces/domain/IUserListService';

@injectable()
export default class UserListController implements IController {
  userListService: IUserListService;
  constructor(@inject('UserListService') userListService: IUserListService) {
    this.userListService = userListService;
  }

  handle(req: Request, res: Response, next: NextFunction): void {
    try {
      const listUser = this.userListService.listUser();
      res.status(201).json(listUser);
    } catch (error) {
      next(error);
    }
  }
}
