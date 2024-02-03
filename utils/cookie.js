import jwt from "jsonwebtoken"

export const PlaceCookie = (user, res, message) => {

    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    res.status(200).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "Lax" : "None",
        secure: process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message: message
    })
}