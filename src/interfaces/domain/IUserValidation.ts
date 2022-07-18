import IUser from './IUser';

export default interface IUserValidation {
  validate(cpf: string, email: string, database: IUser[]): void;
}
