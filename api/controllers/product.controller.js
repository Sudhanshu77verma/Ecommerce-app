import { uploadPermission } from "../helpers/permission.js"
import Product from "../models/productMode.js"
import { errorHandler } from "../utils/error.js"


export const uploadProduct=async(req,res,next)=>{
    try {

        const Id= req.userId
        if(uploadPermission(Id) === false)
            {
                return next(errorHandler(401,"You are not allowed to upload product"))
            }
        const uploadProduct= new Product(req.body)
        
        const saveProduct= await uploadProduct.save()

        res.status(200).json({
            success:true,
            message:"Product created Successfully",
            error:false,
            data:saveProduct
        })
    } catch (error) {
        next(error)
    }
}

export  const getProduct= async(req,res,next)=>{
    try {
         
 const getdata= await Product.find()
 
 res.json({
    success:true,
    error:false,
    data:getdata,
    message:"All Product "
 })




    } catch (error) {
        next(error)
    }
}