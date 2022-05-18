import { cp } from "fs/promises";
import UserHelper from "../helper/UserHelper";

class UtilUser{
  static emailValidator( email:String , email_confirmation:String ){
          if(email === email_confirmation){
              return true;
          }else{
              throw new Error("Emails não coincidem");
          }
  };

  static cellphoneValidator(cellphone:String){
    const validCellphone = UserHelper.lenghtValidator(cellphone, 11, 12)

    if(validCellphone){
      return true
    }else{
      throw new Error("Número de telefone inválido")
    }

  }

  static cpfValidator(cpf: string){

    const teste1 = UserHelper.isCpfValid(cpf)
    if (teste1){
      return true
    }else{
      throw new Error("CPF inválido")
    }

  }



}
// export default isCpfValid;
export default UtilUser;
