import IUser from './IUser';

export default interface IUserHelper {
  checkIfEquals(dados: string, field: keyof IUser, database: IUser[]): void;
  cpfValidate(cpf: string): void;
}
