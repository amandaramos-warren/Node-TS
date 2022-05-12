import UtilUser from "../utilUser/utilUser";
import util from "../../../util/util";
class UserService {
    static criaUser(dados:any) {
        const email = UtilUser.emailValidator(dados.email , dados.email_confirmation);
        const field = util.fieldValidator(dados)
        const number = util.numberValidator(dados.number)
        const birthdate = util.birthdateValidator(dados.birthdate)
        return email;
    }

    
    
}

export default UserService;