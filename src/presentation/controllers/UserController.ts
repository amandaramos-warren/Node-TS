import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import UserService from '../../domain/user/services/UserService'

@injectable()
class UserController {
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
