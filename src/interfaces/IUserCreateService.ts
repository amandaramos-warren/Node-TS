import IUserHelper from './IUserHelper'
import Iuser from './IUser'
import IServiceResponse from './ICreateUserResponse'

export default interface IUserCreateService {
  userHelper: IUserHelper
  createUser(body: Iuser): Promise<IServiceResponse>
}
