import IUser from '../../../interfaces/IUser'
import IUserRepository from '../../../interfaces/IUserRepository'

export default class UserRepository implements IUserRepository {
  database: IUser[]
  constructor () {
    this.database = []
  }

  create (entity: IUser): void {
    this.database.push(entity)
  }

  readAll () {
    return this.database
  }
}
