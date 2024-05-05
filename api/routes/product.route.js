import express from "express"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { uploadProduct } from "../controllers/product.controller.js"


const router= express.Router()


router.post('/upload-product', verifyToken,uploadProduct)

export default router