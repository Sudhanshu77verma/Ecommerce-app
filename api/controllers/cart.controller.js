
import Cart from "../models/cartModel.js"

export const addtocart =async(req,res,next)=>{
   
    try { 
            const currentUser= req.userId
        const {productId}=req.body;
   console.log(productId)
        const isProductAvailable = await Cart.findOne({productId})
  console.log(isProductAvailable)

        if(isProductAvailable)
            {
              return res.json({
                    
                success:false,
                message:"Product already added into the cart",
                error:true
              })
            }

            else{

                const payload= {
                    productId :productId,
                    quantity:1,
                    userId:currentUser
                }
                
                const newAddtocart = new Cart(payload)
                const saveProduct = await newAddtocart.save()
        

                res.status(200).json({
                    success:true,
                    data:saveProduct,
                    message:"product added",
                    error:false

                })
            }


     
       
      
    } catch (error) {
        next(error)
    }
}

export const countaddtocart = async(req,res,next)=>{
    try { 

        const userId= req.userId
        const count = await Cart.countDocuments({
            userId:userId
        })
     
        res.json({
            success:true,
            data:count,
            error:false,
              
        })
      


        
    } catch (error) {
        next(error)
    }
}


export const addtocartviewProduct= async(req,res,next)=>{
    try {
          const currentuser= req.userId

          const allproduct= await Cart.find({
            userId:currentuser
          }).populate("productId")

          res.json({
            success:true,
            data:allproduct,
            error:false
          })
    } catch (error) {
        next(error)
    }
}

export const updateaddtocart = async(req,res,next)=>{
    try { 
        const currentuser= req.userId
        const addtocartproductId= req.body._id
        const qty = req.body.quantity

        const updatedqty = await Cart.findByIdAndUpdate(addtocartproductId , 
            {
                $set:{
                     quantity:qty
                }
            }, {new:true}
        )
         

   res.status(200).json({
    success:true,
    error:false,
    message:"Product updated successfully",
    data:updatedqty
   })

    } catch (error) {
        next(error)
        
    }
}
