import IUser from './IUser';

export default interface IUserRepository {
  create(entity: IUser): void;
  readAll(): IUser[];
}
