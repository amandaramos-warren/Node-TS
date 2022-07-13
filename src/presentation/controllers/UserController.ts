import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserController from '../../interfaces/IUserController'
import IUserService from '../../interfaces/IUserService'

@injectable()
export default class UserController implements IUserController {
  userService: IUserService
  constructor (@inject('UserService') userService: IUserService) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const criaUser = await this.userService.createUser(req.body)
    res.status(criaUser.code).json(criaUser.msg)
  }
}
