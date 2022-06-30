import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import IListController from '../../interfaces/IListController'
import IListService from '../../interfaces/IListService'

@injectable()
export default class ListController implements IListController {
  listService: IListService
  constructor (@inject('ListService')listService: IListService) {
    this.listService = listService
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const listUser = await this.listService.listUser()
    res.status(listUser.code).json(listUser.msg)
  }
}
