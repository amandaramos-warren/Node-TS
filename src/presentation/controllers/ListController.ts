import { Request, Response } from 'express'
import User from '../../domain/user/mocks/UserMock'

class ListController {
  static async handle (req: Request, res: Response) {
     const list = [];
     for (const pessoa of User){
       const {full_name, email, birthdate} = pessoa
       list.push({full_name, email, birthdate})
     }
     res.send(list)
  }
}

export default ListController
