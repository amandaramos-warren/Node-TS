import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserCreateController from '../../interfaces/IUserCreateController'
import IUserCreateService from '../../interfaces/IUserCreateService'

@injectable()
export default class UserCreateController implements IUserCreateController {
  userCreateService: IUserCreateService
  constructor (@inject('UserCreateService') userCreateService: IUserCreateService) {
    this.userCreateService = userCreateService
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const criaUser = await this.userCreateService.createUser(req.body)
    res.status(criaUser.code).json(criaUser.message)
  }
}
