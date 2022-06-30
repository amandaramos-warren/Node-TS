import IUserService from './IUserService'
import { Request, Response } from 'express'

export default interface IUserController{
  userService: IUserService
  handle: (req: Request, res: Response) => Promise<void>
}
