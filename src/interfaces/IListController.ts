import IListService from './IListService'
import { Request, Response } from 'express'

export default interface IListController{
  listService: IListService
  handle(req: Request, res: Response): Promise<void>
}
