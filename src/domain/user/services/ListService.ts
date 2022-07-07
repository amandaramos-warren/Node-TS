import IListService from '../../../interfaces/IListService'
import IUser from '../../../interfaces/IUser'
import IServiceResponse from '../../../interfaces/IServiceResponse'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '../../../interfaces/IUserRepository'

@injectable()
export default class ListService implements IListService {
  userRepository: IUserRepository
  constructor (@inject('UserRepository')userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async listUser (): Promise<IServiceResponse> {
    try {
      const list: Partial<IUser>[] = this.userRepository.database.map((item) => {
        const { fullName, email } = item
        return {
          fullName,
          email
        }
      })
      return { code: 201, msg: list }
    } catch (error) {
      return { code: 422, msg: error }
    }
  }
}
