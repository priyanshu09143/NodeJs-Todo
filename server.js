import { app } from "./app.js";
import { ConnectDB } from "./data/database.js";

app.listen(process.env.PORT,()=>{
    console.log("Server Is Running At Port" , process.env.PORT)
})
ConnectDB();