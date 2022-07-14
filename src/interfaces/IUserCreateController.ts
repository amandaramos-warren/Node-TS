import IUserCreateService from './IUserCreateService';
import { Request, Response } from 'express';

export default interface IUserCreateController {
  userCreateService: IUserCreateService;
  handle: (req: Request, res: Response) => void;
}
