import { Request, Response } from "express";
import UserService from "../../domain/user/services/UserService"; 
import util from "../../util/util";

class UserController {
  static handle( req : Request , res : Response ) {
    const dados = req.body;

    let email = UserService.emailValidator(dados.email , dados.email_confirmation);
    let field = util.fieldValidator(dados)
    let number = util.numberValidator(dados.number)
    let birthdate = util.birthdateValidator(dados.birthdate)

    let validator: any[] = [ email , field , number , birthdate ]
    let user = UserService.user(validator)

    res.json(user)
    
  }
}

export default UserController;
