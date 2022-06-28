import IUserHelper from './IUserHelper'
import Iuser from './IUser'

export default interface IUserService {
  userHelper: IUserHelper
  criaUser(dados: Iuser): Promise<{
    code: number
    msg?: string
  }>
}
