import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

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
    ProfilePic:req.body.ProfilePic,
    role:"GENERAL",
    password:hashedpassword
   }
    const newUser= new User(payload)
    try {
            const saveuser= await newUser.save()
            res.status(200).json({
                success:true,
                message:"User created successfully",
                data:saveuser
                 
            })
   
} catch (error) {
     next(error)
}
}

export const signin= async(req,res,next) =>{
    


    try {
         
        const {email,password} = req.body;
        if(!email)
        {
            return next(errorHandler(402, "Please enter the email"))
        }
        if(!password)
        {
            return next(errorHandler(402,"Please ennter the password"))
        }

        const user= await User.findOne({email});
        if(!user){
            return next(errorHandler(402, "User Not found"))
        }
       
      const checkPass=  bcryptjs.compareSync(password,user.password)
    //   console.log(checkPass)

    if(checkPass)
    {
        const token=jwt.sign(
            {_id:user._id,email:user.email},process.env.JWT,{expiresIn:60 * 60* 8});
            
               const {password:pass ,...rest }=user._doc;
                  res.status(200).cookie('token',token,{
                    httpOnly:true, 
                   }
                  ).json(
                    rest
                 );
    }
     else{
        return next(errorHandler(401,"Wrong credentials"))
     }



    } catch (error) {
         next(error)
    }  
}