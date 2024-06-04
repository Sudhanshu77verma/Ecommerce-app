import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser'
import productRoute from './routes/product.route.js'

import cartRoute from './routes/cart.route.js'

import Razorpay from 'razorpay'
import paymentrouter from './routes/paymentroute.js'
import cors from "cors"
dotenv.config()


  export const instance=new Razorpay({
   key_id: process.env.RAZORPAY_API_KEY,
   key_secret:process.env.RAZORPAY_API_SECRET
})



mongoose.connect(process.env.MONGO).then(()=>
{
    console.log("mongo db is connected")
}).catch((error)=>{
    console.log(error)
})
 const app= express()

 app.use(cookieParser())
  app.use(express.json())
  app.use(cors())
 

 app.listen(3000,()=>{
    console.log("server is running on port 3000")
 })



app.use('/api/user',userRouter)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/payment' , paymentrouter)

app.get('/api/getkey' , (req,res)=>{
    res.status(200).json({

   key:process.env.RAZORPAY_API_KEY
    })
})

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || "Internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
}
    )
