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
      const list: Partial<IUser>[] = []
      for (const pessoa of await this.userRepository.readAll()) {
        const { fullName, email, birthdate } = pessoa

        list.push({ fullName, email, birthdate })
      }
      return { code: 201, msg: list }
    } catch (error) {
      return { code: 422, msg: error }
    }
  }
}
