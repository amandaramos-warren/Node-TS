import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserController from '../../domain/user/interfaces/IUserController'
import IUserService from '../../domain/user/interfaces/IUserService'

@injectable()
class UserController implements IUserController {
  userService: IUserService
  constructor (@inject('UserService') userService: IUserService) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const criaUser = await this.userService.criaUser(req.body)
    res.status(criaUser.code).json(criaUser.msg)
  }
}

export default UserController
