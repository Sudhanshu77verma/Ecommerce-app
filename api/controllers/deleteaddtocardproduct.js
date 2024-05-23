import Cart from "../models/cartModel.js"


export  const deleteaddtocart = async(req,res,next)=>{

    
try {
      const currentuserid= req.userId
    const productId=req.body._id
    
    const deleteproduct = await Cart.deleteOne({productId})

    
    res.json({
        success:true,
        message:"Product delted from cart",
        data:deleteproduct,
        error:false
    })

} catch (error) {
    next(error)
}

}