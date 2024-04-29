import express from "express"
import { signin, signup } from "../controllers/auth.controller.js"
import { userDetails } from "../controllers/userDetail.controller.js"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { signout } from "../controllers/user.controller.js"
 

const router= express.Router()
 
router.post('/signup', signup)
router.post('/signin',signin)
router.get('/userDetails', verifyToken, userDetails)
router.get('/userlogout',signout)
export default router