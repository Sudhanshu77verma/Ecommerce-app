import express from "express"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { getCategoryProduct, getProduct, updateProduct, uploadProduct } from "../controllers/product.controller.js"


const router= express.Router()


router.post('/upload-product', verifyToken,uploadProduct)
router.get('/get-product', getProduct)
router.post('/update-product/:productId',verifyToken,updateProduct)
router.get('/category-product',getCategoryProduct)
export default router