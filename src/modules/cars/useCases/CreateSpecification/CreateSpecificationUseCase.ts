import { inject, injectable } from "tsyringe";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

@injectable()
export class CreateSpecificationUseCase{
  constructor(
    @inject("SpecificationRepository")
    private SpecificationRepository: SpecificationRepository){}

  async execute({name, description}){
    const specification = await this.SpecificationRepository.create({name, description})
    return specification
  }
}