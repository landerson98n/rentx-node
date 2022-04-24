import { Repository } from "typeorm";
import { AppDataSource } from "../../../../..";
import { User } from "../../entities/User";


export class UserRepository{
  private repository: Repository<User>
  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async create({name, username, password, email, driver_license}){
   const user = this.repository.create({
      name, 
      username, 
      password, 
      email, 
      driver_license
    })
    await this.repository.save(user)
    return user
  }
}