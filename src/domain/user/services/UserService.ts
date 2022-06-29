import { inject, injectable } from 'tsyringe'
import User from '../mocks/UserMock'
import IUserHelper from '../interfaces/IUserHelper'
import IUserService from '../interfaces/IUserService'
import Iuser from '../interfaces/IUser'
import IServiceResponse from '../interfaces/IServiceResponse'

@injectable()
export default class UserService implements IUserService {
  userHelper: IUserHelper
  constructor (@inject('UserHelper')userHelper: IUserHelper) {
    this.userHelper = userHelper
  }

  async criaUser (dados: Iuser): Promise<IServiceResponse> {
    try {
      this.userHelper.cpfValidate(dados.cpf)
      this.userHelper.checkIfEquals(dados.email)

      User.push(dados)
      // this.userRepository.create(user)
      return { code: 201, msg: 'Usuário Criado' }
    } catch (error) {
      let message: string | undefined
      if (error instanceof Error) message = error.message

      return { code: 422, msg: message }
    }
  }
}
