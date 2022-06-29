import IUser from './IUser'

export default interface IServiceResponse {
  code: number
  msg: Partial<IUser>[] | unknown | string
}
