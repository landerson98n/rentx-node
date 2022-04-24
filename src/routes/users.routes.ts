import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/CreateUser/CreateUserController";

export const userRoutes = Router()
const createUserController = new CreateUserController()


userRoutes.post("/",createUserController.handle)