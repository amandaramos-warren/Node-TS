import { Request, Response } from 'express';
import UserService from '../../domain/user/services/UserService';

class UserController {
  static handle(req: Request, res: Response) {
    const dados = req.body;

    try {
      const criaUser = UserService.criaUser(dados);
      if (criaUser) {
        res.status(200).json('Usuário criado');
      }
    } catch (e: any) {
      res.status(400).json(e.message);
    }
  }
}

export default UserController;
