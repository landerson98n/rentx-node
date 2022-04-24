import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

export class CreateSpecificationController{

  async handle(request: Request, response: Response){
    const {name, description} = request.body
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
    const specification = await createSpecificationUseCase.execute({name, description})
    return response.status(201).json(specification)
  }
}