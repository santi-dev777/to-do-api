import express, {json} from "express"
import { createTaskRouter} from "./routes/task.js"
import { createCategoryRouter } from "./routes/category.js"
import { corsMiddleware } from "./middleware/cors.js"

export const createApp = ({ taskModel, categoryModel }) =>{
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.use("/tasks", createTaskRouter({ taskModel}))
  app.use("/category", createCategoryRouter({ categoryModel }))
  
  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}