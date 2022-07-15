import { inject, injectable } from 'tsyringe';
import IUserCreateService from '../../../interfaces/IUserCreateService';
import IUser from '../../../interfaces/IUser';
import ICreateUserResponse from '../../../interfaces/ICreateUserResponse';
import IUserRepository from '../../../interfaces/IUserRepository';
import IUserValidation from '../../../interfaces/IUserValidation';

@injectable()
export default class UserCreateService implements IUserCreateService {
  userValidation: IUserValidation;
  userRepository: IUserRepository;
  constructor(
    @inject('UserValidation') userValidation: IUserValidation,
    @inject('UserRepository') userRepository: IUserRepository
  ) {
    this.userValidation = userValidation;
    this.userRepository = userRepository;
  }

  createUser(body: IUser): ICreateUserResponse {
    try {
      this.userValidation.validate(
        body.cpf,
        body.email,
        this.userRepository.database
      );
      this.userRepository.create(body);
      return { code: 201, message: 'Usuário Criado' };
    } catch (error: unknown) {
      const { message } = error as Error;
      return { code: 422, message };
    }
  }
}
