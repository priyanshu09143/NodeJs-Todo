import mongoose from "mongoose";


export const ConnectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{dbName: "Todo"})
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.log(err, "Something Went Worng"))
}