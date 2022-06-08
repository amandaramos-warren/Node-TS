import User from "../mocks/UserMock";
import Iuser from "../types/UserTypes";

class ListService{
  static async listUser(){
    try {
      const list: Partial<Iuser>[] = [];
      for (const pessoa of User){
        const {full_name, email, birthdate} = pessoa

        list.push({full_name, email,birthdate})
      }
      return { code: 201, msg: list}
    } catch (error) {
      return { code: 422, msg: error}
    }
  }
}

export default ListService
