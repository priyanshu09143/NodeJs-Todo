import { Task } from "../models/Task.js"
export const AddTask = async (req, res,next) => {
try {
    const { Title, Discription } = req.body
    const task = await Task.create({
        Title,
        Discription,
        User: req.user
    })
    res.json({
        success: true,
        message: "Task added SuccessFully",
        task
    })

} catch (error) {
 next(error) 
}
}
export const AllTask = async(req ,res ,next)=>{
    try {
        const userID = req.user._id
    const task  =await Task.find({User : userID})
    res.status(200).json({
        success:true,
        task
    })
    } catch (error) {
      next(error)  
    }
}

export const IsComplet = async (req,res,next)=>{
    try {
        const task  = await Task.findById(req.params.id)
    task.isCompleted = !task.isCompleted; 
    await task.save()
    res.json({
        success:true,
        message:"Task Updated",
        task
    })
    } catch (error) {
    next(error)    
    }
}
export const IsDelete = async (req,res,next)=>{
    try {
        const task  = await Task.findById(req.params.id)
     if(!task){
        return res.status(404).json({
            success:false,
            message:'Task Not Found'
        })
     }
    await task.deleteOne();
    res.json({
        success:true,
        message:"Task Deleted",
    })
    } catch (error) {
      next(error)  
    }
}
