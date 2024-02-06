import express  from "express";
import dotenv from 'dotenv'
import UserRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import TaskRoutes from "./routes/task.js";
import cors from "cors"
export const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(UserRoutes)
app.use(TaskRoutes)
app.use(cors({
    origin:[process.env.FRONTEND_URI],
    methods: [ "GET", "POST", "PUT","DELETE"],
    credentials:true,
}))

app.get("/",(req,res)=>{
    res.send("Page Working fine")
})

dotenv.config({
    path:"./config.env"
})

