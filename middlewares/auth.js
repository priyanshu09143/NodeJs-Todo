import User from "../models/User.js"
import jwt from "jsonwebtoken"
export const IsAuth= async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return res.json({
            success:false,
            message:"Login First"
        })
    }
    let user = jwt.verify(token,process.env.JWT_KEY)
    req.user =await User.findById(user._id)
       next();
}   