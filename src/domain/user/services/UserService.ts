import { inject, injectable } from 'tsyringe'
import UserHelper from '../helper/UserHelper'
import User from '../mocks/UserMock'
import IUserHelper from '../interfaces/IUserHelper'
import IUserService from '../interfaces/IUserService'
import Iuser from '../interfaces/IUser'

@injectable()
class UserService implements IUserService {
  userHelper: IUserHelper
  constructor (@inject('UserHelper')UserHelper: UserHelper) {
    this.userHelper = UserHelper
  }

  async criaUser (dados: Iuser) {
    try {
      this.userHelper.cpfValidate(dados.cpf)
      this.userHelper.checkIfEquals(dados.email)

      User.push(dados)
      // this.userRepository.create(user)
      return { code: 201, msg: 'Usuário Criado' }
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message

      return { code: 422, msg: message }
    }
  }
}

export default UserService
