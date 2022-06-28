import User from '../mocks/UserMock'
import IListService from '../interfaces/IListService'
import IUser from '../interfaces/IUser'

class ListService implements IListService {
  async listUser () {
    try {
      const list: Partial<IUser>[] = []
      for (const pessoa of User) {
        const { fullName, email, birthdate } = pessoa

        list.push({ fullName, email, birthdate })
      }
      return { code: 201, msg: list }
    } catch (error) {
      return { code: 422, msg: error }
    }
  }
}

export default ListService
