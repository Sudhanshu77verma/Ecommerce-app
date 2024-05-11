
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

          const allproduct= await addtocart.find({
            userId:currentuser
          })

          res.json({
            success:true,
            data:allproduct,
            error:false
          })
    } catch (error) {
        next(error)
    }
}