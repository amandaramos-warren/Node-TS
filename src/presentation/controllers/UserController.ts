import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserController from '../../domain/user/interfaces/IUserController'
import UserService from '../../domain/user/services/UserService'

@injectable()
class UserController implements IUserController {
  userService: UserService
  constructor (@inject('UserService') userService: UserService) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response) => {
    const criaUser = await this.userService.criaUser(req.body)
    res.status(criaUser.code).json(criaUser.msg)
  }
}

export default UserController
