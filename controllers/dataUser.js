import User from "../models/User.js"
import bcrypt from "bcrypt"
import { PlaceCookie } from "../utils/cookie.js"

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const UserById = await User.findOne({ email }).select("+password")
        if (!UserById) return res.status(404).json({
            success: false,
            message: "Invalid Email or Password"
        })
        const PassMatch = await bcrypt.compare(password, UserById.password)
        console.log(PassMatch)
        if (!PassMatch) {
             return res.status(404).json({
                success: false,
                message: "Invalid Email or password"
            })
        }
        PlaceCookie(UserById, res, "login SuccessFully")

    } catch (error) {
        next(error)
    }
}
export const SignIn = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        let user = await User.findOne({ email })
        if (user) return res.status(404).json({
            success: true,
            Message: "User Already Exist"
        })
        const HashPass = await bcrypt.hash(password, 10)
        user = await User.create({
            name,
            email,
            password: HashPass,
        })
        PlaceCookie(user, res, "Register SuccessFully")
    } catch (error) {
        next(error)
    }
}
export const profile = (req, res, next) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
}
export const logout = (req, res, next) => {
    res.status(404).cookie("token", "", {
        expires: new Date(0),
        sameSite: process.env.NODE_ENV === "Development" ? "Lax" : "None",
        secure: process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message: "User Logout"
    })
}