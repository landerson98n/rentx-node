import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { hash } from "bcrypt";
@injectable()
export class CreateUserUseCase{
  constructor(
    @inject("UserRepository")
    private UserRepository: UserRepository){}

  execute({name, username, password, email, driver_license}){
    const passwordHash = hash(password, "diguasd71791231")
    const user = this.UserRepository.create({
      name, 
      username,
      password: passwordHash,
      email, 
      driver_license
    })
    return user
  }
}