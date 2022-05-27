import { Request, Response } from 'express'
import UserService from '../../domain/user/services/UserService'

class UserController {
  static async handle (req: Request, res: Response) {

    const criaUser = await UserService.criaUser(req.body)

    res.status(criaUser.code).json(criaUser.msg)


    // try {
    //   const criaUser = UserService.criaUser(dados)
    //   if (criaUser) {
    //     res.status(200).json({
    //       message: 'Usuário Criado'
    //     })
    //   }
    // } catch (e: any) {
    //   res.status(400).json({
    //     error: e.message
    //   })
    // }
  }
}

export default UserController
