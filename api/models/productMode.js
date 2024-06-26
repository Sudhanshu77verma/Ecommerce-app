
import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    productName: {
        type:String,
        required:true,
    },
    brandName: {
        type:String,
        required:true,
    },
    category: {
        type:String,
    },

    productImage: [],

    description: {
        type:String,
    },
    price: {
        type:Number,
    },
    sellingPrice: {
        type:Number
    }
},{
    timestamps:true

})

const Product = mongoose.model("Product",productSchema)
export default Product