import Iuser from './IUser';
import IServiceResponse from './ICreateUserResponse';

export default interface IUserCreateService {
  createUser(body: Iuser): IServiceResponse;
}
