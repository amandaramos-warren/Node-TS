import IUserListService from './IUserListService';
import { Request, Response } from 'express';

export default interface IUserListController {
  userListService: IUserListService;
  handle(req: Request, res: Response): void;
}
