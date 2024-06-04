import { instance } from "../index.js"
import crypto from 'crypto'
import Payment from "../models/payment.js";

export const checkout = async(req,res,next)=>{
    const {amount} =req.body;
    try {
        
       const options= {
        amount:Number(amount*100),
        currency:"INR",
        receipt:crypto.randomBytes(10).toString('hex'),

       }


      instance.orders.create(options, (error,order)=>{
        if(error)
            {
                return res.status(400).json({message:"something went wrong"})
            }

            res.status(200).json({
                data:order
            })

          
      })

  

    } catch (error) {
        next(error)
    }
}




export const verify= async(req,res,next)=>{
   const { razorpay_order_id,   razorpay_payment_id,  razorpay_signature} =req.body;
    try {
      
        const sign= razorpay_order_id + '|' + razorpay_payment_id
        const expectedSign= crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(sign.toString())
        .digest('hex')
    
         const isauthentic= expectedSign === razorpay_signature

         if(isauthentic){

         
            const payment = new Payment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            })

            await payment.save()
            res.json({
                message:"Payment Successful",
                success:true
            })
        }



    } catch (error) {
        next(error)
    }
}


