import UserHelper from '../helper/UserHelper'
import User from '../mocks/UserMock'
import Iuser from '../types/UserTypes'

class UserService {
 static async criaUser(dados: Iuser) {
  try {
   UserHelper.CpfValidate(dados.cpf)
   UserHelper.checkIfEquals(dados.email, User)

   User.push(dados)
   return { code: 201, msg: 'Usuário Criado' }
  } catch (error) {
   let message = 'Unknown error'
   if (error instanceof Error) message = error.message
   return { code: 422, msg: message }
  }
 }
}

export default UserService
