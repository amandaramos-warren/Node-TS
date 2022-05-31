import User from '../mocks/UserMock'
import Iuser from '../types/UserTypes'
import userSchema from '../helper/userValidation'

class UserService {
  static async criaUser (dados: Iuser) {
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
