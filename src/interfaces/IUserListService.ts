import IServiceResponse from './ICreateUserResponse'

export default interface IUserListService {
  listUser(): Promise<IServiceResponse>
}
