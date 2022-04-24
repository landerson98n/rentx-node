import {container} from "tsyringe"
import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository"
import {CategoriesRepository} from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository"
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository"


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton(
  "SpecificationRepository",
  SpecificationRepository
)

container.registerSingleton(
  "UserRepository",
  UserRepository
)