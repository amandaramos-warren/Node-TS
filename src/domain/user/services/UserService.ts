import { inject, injectable } from 'tsyringe'
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

  async createUser (body: IUser): Promise<IServiceResponse> {
    try {
      this.userHelper.cpfValidate(body.cpf)
      this.userHelper.checkIfEquals(body.email, this.userRepository.database)
      this.userRepository.create(body)
      return { code: 201, msg: 'Usuário Criado' }
    } catch (error) {
      let message: string | undefined
      if (error instanceof Error) message = error.message

      return { code: 422, msg: message }
    }
  }
}
