import IListService from '../../../interfaces/IListService'
import IServiceResponse from '../../../interfaces/IServiceResponse'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '../../../interfaces/IUserRepository'
import IUserListResponse from '../../../interfaces/IUserListResponse'

@injectable()
export default class ListService implements IListService {
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
      return { code: 201, msg: result }
    } catch (error) {
      return { code: 422, msg: error }
    }
  }
}
