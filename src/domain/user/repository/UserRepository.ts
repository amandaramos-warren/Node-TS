import IUser from '../../../interfaces/IUser'
import IUserRepository from '../../../interfaces/IUserRepository'

export default class UserRepository implements IUserRepository {
  database: IUser[]
  constructor () {
    this.database = []
  }

  async create (entity: IUser): Promise <void> {
    this.database.push(entity)
  }

  async readAll () {
    return this.database
  }
}
