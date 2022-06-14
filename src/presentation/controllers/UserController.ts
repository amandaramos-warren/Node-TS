import { Request, Response } from 'express'
import UserService from '../../domain/user/services/UserService'

class UserController {
 static async handle(req: Request, res: Response) {
  const criaUser = await UserService.criaUser(req.body)

  res.status(criaUser.code).json(criaUser.msg)
 }
}

export default UserController
