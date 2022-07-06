import IUser from './IUser'

export default interface IUserHelper{
  checkIfEquals(dados: string, database: IUser[]): boolean
  cpfValidate(cpf: string): boolean
}
