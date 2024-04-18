import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";

export const signup =async(req,res,next)=>{

      
    const {email, name,password} = req.body;

    const user=await User.findOne({email})
    if(user)
    {
        return next(errorHandler(402,"User Already exist"))
    }
    if(!email || !password || !name )
    {
        return next(errorHandler(402, "Please enter the details"))
    } 
    if(password !== req.body.confirmPassword)
    {
        return next(errorHandler(402, "Password doen't match with confirmPassword"))
    }
      
   const hashedpassword = bcryptjs.hashSync(password,10)
   if(!hashedpassword)
   {
    return next(errorHandler(402, "something went wrong"))
   }

   const payload= {
    ...req.body,
    password:hashedpassword
   }
    const newUser= new User(payload)
    try {
            const saveuser= await newUser.save()
            res.status(200).json({
                success:true,
                message:"User created successfully",
              
                 
            })
   
} catch (error) {
     next(error)
}
}