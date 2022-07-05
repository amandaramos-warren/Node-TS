import { inject, injectable } from 'tsyringe'
// import User from '../repository/UserRepository'
import IUserHelper from '../../../interfaces/IUserHelper'
import IUserService from '../../../interfaces/IUserService'
import IUser from '../../../interfaces/IUser'
import IServiceResponse from '../../../interfaces/IServiceResponse'
import IUserRepository from '../../../interfaces/IUserRepository'

@injectable()
export default class UserService implements IUserService {
  userRepository: IUserRepository
  userHelper: IUserHelper
  constructor (
    @inject('UserRepository')userRepository: IUserRepository,
    @inject('UserHelper')userHelper: IUserHelper) {
    this.userRepository = userRepository
    this.userHelper = userHelper
  }

  async criaUser (dados: IUser): Promise<IServiceResponse> {
    try {
      this.userHelper.cpfValidate(dados.cpf)
      this.userHelper.checkIfEquals(dados.email, this.userRepository.database)
      this.userRepository.create(dados)
      return { code: 201, msg: 'Usuário Criado' }
    } catch (error) {
      let message: string | undefined
      if (error instanceof Error) message = error.message

      return { code: 422, msg: message }
    }
  }
}
