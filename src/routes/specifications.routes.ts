import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";

export const specificationRoutes = Router()
const specificationController =  new CreateSpecificationController()

specificationRoutes.post("/", specificationController.handle)