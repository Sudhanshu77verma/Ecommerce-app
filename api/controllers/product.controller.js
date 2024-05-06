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


export const updateProduct= async(req,res,next)=>{
    try {
        if(!uploadPermission)
            {
                return next(errorHandler(401,"You are not allowed to update the product"))
            }
 const id=req.params.productId
   
  const newProduct= await Product.findByIdAndUpdate(id,
    {
        $set:{
          productName:req.body.productName,
         
          brandName: req.body.brandName,
          category:req.body.category,
          productImage:req.body.productImage,
          description: req.body.description,
          price: req.body.price,
          sellingPrice: req.body.sellingPrice,
        }
    }, { new:true }
  )
  res.status(200).json({
    success:true,
    message:"Product updated Successfully",
    error:false,
    data:newProduct
  })     
     
    } catch (error) {
        next(error)
    }
}