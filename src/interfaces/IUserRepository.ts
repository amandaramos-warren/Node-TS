import IUser from './IUser'

export default interface IUserRepository {
  database: IUser[]
  create(entity: IUser): Promise<void>
  readAll(): Promise<IUser[]>
}
