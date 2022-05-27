import UtilUser from '../utilUser/utilUser'
import Util from '../../../util/util'
import User from '../mocks/UserMock'
import Iuser from '../types/UserTypes'
import userSchema from '../helper/userValidation'

class UserService {
  static async criaUser (dados: Iuser) {
    // const field = Util.fieldValidator(dados)
    // const email = UtilUser.emailValidator(
    //   dados.email,
    //   dados.email_confirmation
    // )
    // const cpf = UtilUser.cpfValidator(dados.cpf, User)
    // const cellphone = UtilUser.cellphoneValidator(dados.cellphone)
    // const birthdate = Util.birthdateValidator(dados.birthdate)
    // const postalCode = Util.postalCodeValidator(dados.postal_code)
    // const number = Util.numberValidator(dados.number)
    try {
      const newUser = await userSchema.validateAsync(dados)
      User.push(newUser)
      return { code: 201, msg: {message: 'Usuário Criado'}}
    } catch (error) {
      return { code: 422, msg: error}
    }
  }
}

export default UserService
