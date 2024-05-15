import express from "express"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { addtocart, addtocartviewProduct, countaddtocart, updateaddtocart } from "../controllers/cart.controller.js"
import { deleteaddtocart } from "../controllers/deleteaddtocardproduct.js"

const router = express.Router()

router.post('/addtocart',verifyToken, addtocart)
router.get('/countcart',verifyToken,countaddtocart)
router.get('/alladdtocart', verifyToken,addtocartviewProduct)
router.post('/delete-card-product',verifyToken,deleteaddtocart)
router.post('/updated-cart',verifyToken,updateaddtocart)
export default router