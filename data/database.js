import mongoose from "mongoose";
export const ConnectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{dbName: "Todo"})
    .then((c) => console.log("DataBase Connected", c.connection.host))
    .catch((err) => console.log(err, "Something Went Worng"))
}