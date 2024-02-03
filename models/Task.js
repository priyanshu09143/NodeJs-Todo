import mongoose from "mongoose"

const TaskSchema = mongoose.Schema({
    Title:{
        type:String,
        require:true,
    },
    Discription:{
        type:String,
        require:true,
        unique:true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }


})

export const Task = mongoose.model("Task",TaskSchema)