import IUser from './IUser'

export default interface IUserHelper{
  checkIfEquals(dados: string, database: IUser[]): void
  cpfValidate(cpf: string): void
}
