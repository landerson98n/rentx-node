import * as express from "express"
import { categoriesRoutes } from "./routes/categories.routes"
import { specificationRoutes } from "./routes/specifications.routes"
import { userRoutes } from "./routes/users.routes"
import "./shared/container"
import "../index"
const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use("/categories",categoriesRoutes)
app.use("/specifications", specificationRoutes)
export {app}