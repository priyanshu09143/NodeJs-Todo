import { Router } from "express";
import { SignIn, login, logout, profile } from "../controllers/dataUser.js";
import { IsAuth } from "../middlewares/auth.js";

const router  = Router();

// router.get("/home",InitialResponse)
router.post("/signIn",SignIn)
router.post("/logIn",login)
router.get("/logout",logout)
router.get("/profile",IsAuth,profile)

export default router