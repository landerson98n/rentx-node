import {Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { AppDataSource } from "../../../../..";
import { ICategoriesRepository } from "../ICategoriesRepository";

export interface ICreateCategoryDTO{
  name: string,
  description: string
}

class CategoriesRepository implements ICategoriesRepository{

  private repository: Repository<Category>;
  public constructor(){
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({name, description}: ICreateCategoryDTO): Promise<Category>{
    const category = this.repository.create({
      name, 
      description,
    })

    await this.repository.save(category)
    return category
  }

  async list(): Promise<Category[]>{
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category>{
    const category = await this.repository.findOne({
      where:{
        name
      }
    })
    return category
  }

}

export {CategoriesRepository}