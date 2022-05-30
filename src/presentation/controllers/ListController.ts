import { Request, Response } from 'express'
import User from '../../domain/user/mocks/UserMock'

class ListController {
  static async handle (req: Request, res: Response) {
    for(let i = 0; i < User.length; i++){
      const obj = User[i]


    }
    res.send("teste")
  }
}

export default ListController
