import { Request, Response } from "express";
import UserService from "../../domain/user/services/UserService"; 


class UserController {
  static handle( req : Request , res : Response ) {
    const dados = req.body;

    const teste1 = UserService.criaUser(dados)
    
    try {
      if(teste1){
        res.json("aqui")
      }else{
        new Error("foi")
        throw Error
      }
    } catch (Error: any) {
      res.sendStatus(400).send(Error)
      
  }

    // let validator: any[] = [ email , field , number , birthdate ]
    // let user = UserService.user(validator)
    
    
  }
}

export default UserController;
