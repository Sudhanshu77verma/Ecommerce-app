import mongoose from "mongoose";

const cartschema= new mongoose.Schema({
     
    productId:{
        ref:'Product',
        type:String
    },
    quantity:{
        type:Number,

    },
    userId:{
        type:String,
    }

} , {timestamps:true})

const Cart =mongoose.model("Cart",cartschema)

export default Cart
