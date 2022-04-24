import { Repository } from "typeorm";
import { AppDataSource } from "../../../../..";
import {Specification} from '../../entities/Specification'

export class SpecificationRepository{
  private repository: Repository<Specification>
  private static INSTANCE: SpecificationRepository
  constructor(){
    this.repository = AppDataSource.getRepository(Specification)
  }

  public static getInstance(): SpecificationRepository{
    if(!SpecificationRepository.INSTANCE){
      return  SpecificationRepository.INSTANCE = new SpecificationRepository()
    }
    return SpecificationRepository.INSTANCE 
  }

  async create({description, name}){
    const specification = this.repository.create({
      description, 
      name
    })
    await this.repository.save(specification)
    return specification
  }

  async findByName(name: string){
    const specification = this.repository.findOne({
      where: {
        name
      }
    })
    return specification
  }
}