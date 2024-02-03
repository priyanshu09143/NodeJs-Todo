import express from "express"
import { AddTask, AllTask, IsComplet, IsDelete} from "../controllers/Task.js"
import { IsAuth } from "../middlewares/auth.js"

const router = express.Router()

router.post("/AddTask",IsAuth,AddTask)
router.get("/AllTasks",IsAuth,AllTask)
router.put("/update/:id",IsAuth,IsComplet)
router.delete("/delete/:id",IsAuth,IsDelete)

export default router