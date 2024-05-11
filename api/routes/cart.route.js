import express from "express"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { addtocart, countaddtocart } from "../controllers/cart.controller.js"

const router = express.Router()

router.post('/addtocart',verifyToken, addtocart)
router.get('/countcart',verifyToken,countaddtocart)
export default router