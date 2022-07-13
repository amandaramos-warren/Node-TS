import IUserListService from '../../../interfaces/IUserListService'
import IServiceResponse from '../../../interfaces/ICreateUserResponse'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '../../../interfaces/IUserRepository'
import IUserListResponse from '../../../interfaces/IUserListResponse'

@injectable()
export default class UserListService implements IUserListService {
  userRepository: IUserRepository
  constructor (@inject('UserRepository')userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async listUser (): Promise<IServiceResponse> {
    try {
      const result: IUserListResponse[] = this.userRepository.database.map(({ fullName, email }) => {
        return {
          fullName,
          email
        }
      })
      return { code: 201, message: result }
    } catch (error) {
      return { code: 422, message: error }
    }
  }
}
