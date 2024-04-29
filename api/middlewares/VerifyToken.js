import jwt from "jsonwebtoken"

export const verifyToken = async(req,res,next)=>{
    try {
           const token= req.cookies.token 
           if(!token)
           {
          return  res.status(400).json({
            message:"User not Login",
            error:true,
            success:false
          })
           }
           jwt.verify(token,process.env.JWT,(err,decoded)=>{
            if(err)
            {
              console.log(err)
            } 
            else {
              req.userId = decoded?._id
  
              next()
            }
        
           }
           
     

           )
    } catch (error) {
          res.status(400).json({
            data:[],
            success:false,
            
          })
    }
}