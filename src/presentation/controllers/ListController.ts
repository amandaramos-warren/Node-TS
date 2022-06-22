import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import ListService from '../../domain/user/services/ListService'

@injectable()
class ListController {
  listService: ListService
  constructor (@inject('ListService')listService: ListService) {
    this.listService = listService
  }

  async handle (req: Request, res: Response) {
    const listUser = await this.listService.listUser()
    res.status(listUser.code).json(listUser.msg)
  }
}

export default ListController
