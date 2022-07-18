import { NextFunction, Request, Response } from 'express';

export default interface IUserListController {
  handle(req: Request, res: Response, next: NextFunction): void;
}
