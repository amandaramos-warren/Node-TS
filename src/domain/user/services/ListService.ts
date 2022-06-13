import User from '../mocks/UserMock'

class ListService {
 static async listUser() {
  try {
   const list = []
   for (const pessoa of User) {
    const { fullName, email, birthdate } = pessoa

    list.push({ fullName, email, birthdate })
   }
   return { code: 200, msg: list }
  } catch (error) {
   return { code: 422, msg: error }
  }
 }
}

export default ListService
