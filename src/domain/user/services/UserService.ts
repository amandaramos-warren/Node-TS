import UtilUser from '../utilUser/utilUser';
import Util from '../../../util/util';
import User from '../mocks/UserMock';
import Iuser from '../types/UserTypes';

class UserService {
  static criaUser(dados: Iuser) {
    const field = Util.fieldValidator(dados);
    const email = UtilUser.emailValidator(dados.email, dados.email_confirmation);
    const cpf = UtilUser.cpfValidator(dados.cpf, User);
    const cellphone = UtilUser.cellphoneValidator(dados.cellphone);
    const birthdate = Util.birthdateValidator(dados.birthdate);
    const postalCode = Util.postalCodeValidator(dados.postal_code);
    const number = Util.numberValidator(dados.number);

    const verificações = [
      field,
      email,
      cpf,
      cellphone,
      birthdate,
      postalCode,
      number,
    ];

    if (verificações) {
      User.push(dados);
    }
    return verificações;
  }
}

export default UserService;
