import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/CreateCategory/CreateCategoryController";

const categoriesRoutes = Router()
const createCategoryControler = new CreateCategoryController()

categoriesRoutes.post("/", createCategoryControler.handle)

categoriesRoutes.get("/", (request, response)=>{
  return response.json({message:"Server is running"})
})

export {categoriesRoutes}
