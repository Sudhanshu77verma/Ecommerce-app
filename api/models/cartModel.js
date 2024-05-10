const mongoose = require("mongoose")

const cartschema= new mongoose.Schema({
     
    productId:{
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

module.exports=Cart
