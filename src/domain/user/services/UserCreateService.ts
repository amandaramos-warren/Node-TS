import { inject, injectable } from 'tsyringe'
import IUserHelper from '../../../interfaces/IUserHelper'
import IUserCreateService from '../../../interfaces/IUserCreateService'
import IUser from '../../../interfaces/IUser'
import ICreateUserResponse from '../../../interfaces/ICreateUserResponse'
import IUserRepository from '../../../interfaces/IUserRepository'

@injectable()
export default class UserCreateService implements IUserCreateService {
  userRepository: IUserRepository
  userHelper: IUserHelper
  constructor (
    @inject('UserRepository')userRepository: IUserRepository,
    @inject('UserHelper')userHelper: IUserHelper) {
    this.userRepository = userRepository
    this.userHelper = userHelper
  }

  createUser (body: IUser): ICreateUserResponse {
    try {
      this.userHelper.cpfValidate(body.cpf)
      this.userHelper.checkIfEquals(body.email, this.userRepository.database)
      this.userRepository.create(body)
      return { code: 201, message: 'Usuário Criado' }
    } catch (error: unknown) {
      const { message } = error as Error
      return { code: 422, message }
    }
  }
}
