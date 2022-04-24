import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController{
  async handle(request: Request, response: Response){
   const {name, username, password, email, driver_license} = request.body
   const createUserUseCase = container.resolve(CreateUserUseCase)
   const user = await createUserUseCase.execute({name, username, password, email, driver_license})
   return response.status(201).json(user)
  }
}