import IUserListResponse from './IUserListResponse';

export default interface IUserListService {
  listUser(): IUserListResponse[];
}
