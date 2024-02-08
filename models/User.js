import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

})
const User = mongoose.model("User",UserSchema)
export default User