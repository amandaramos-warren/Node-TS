import Iuser from './IUser'

export default interface IListService {
  listUser(): Promise<{
    code: number
    msg: Partial<Iuser>[] | unknown
  }>
}
