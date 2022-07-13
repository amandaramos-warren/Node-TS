import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IUserListController from '../../interfaces/IUserListController'
import IUserListService from '../../interfaces/IUserListService'

@injectable()
export default class UserListController implements IUserListController {
  userListService: IUserListService
  constructor (@inject('UserListService')userListService: IUserListService) {
    this.userListService = userListService
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const listUser = await this.userListService.listUser()
    res.status(listUser.code).json(listUser.message)
  }
}
