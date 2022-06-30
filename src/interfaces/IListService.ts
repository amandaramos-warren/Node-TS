import IServiceResponse from './IServiceResponse'

export default interface IListService {
  listUser(): Promise<IServiceResponse>
}
