import { Request, Response } from 'express'
import ListService from '../../domain/user/services/ListService'

class ListController {
  static async handle (req: Request, res: Response) {
    const listUser = await ListService.listUser()
    res.status(listUser.code).json(listUser.msg)
  }
}

export default ListController
