import { injectable, inject } from 'tsyringe';
import IUser from '../../../interfaces/IUser';
import IUserHelper from '../../../interfaces/IUserHelper';

@injectable()
export default class UserValidation {
  userHelper: IUserHelper;
  constructor(@inject('UserHelper') userHelper: IUserHelper) {
    this.userHelper = userHelper;
  }

  validate(cpf: string, email: string, database: IUser[]) {
    this.userHelper.cpfValidate(cpf);
    this.userHelper.checkIfEquals(email, database);
  }
}
