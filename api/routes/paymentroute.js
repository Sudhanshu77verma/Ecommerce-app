import express from "express"
import { checkout,verify} from "../controllers/checkout.controller.js"

const router= express.Router()


 router.post('/order', checkout)

 router.post('/verify', verify)
export default router
