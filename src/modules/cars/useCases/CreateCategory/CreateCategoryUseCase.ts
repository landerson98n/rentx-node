import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import {inject, injectable} from 'tsyringe'

@injectable()
class CreateCategoryUseCase{
  constructor(
    @inject("CategoriesRepository")
    private CategoriesRepository: CategoriesRepository){}

  async execute({name, description}){
    const category = await this.CategoriesRepository.create({name, description})
    return category
  }
}

export {CreateCategoryUseCase}