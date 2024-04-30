import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";

export const updateUser= async(req,res,next)=>{
    try {

        const currentUserId= req.userId

if(!currentUserId)
{
    return next(errorHandler(401,"You cannot change the role of the user"))
}


const {userid}= req.body;  
        const updateUser = await User.findByIdAndUpdate(userid,
            {
            $set:{
                email: req.body.email,
                name:req.body.name,
                role:req.body.role,
            }
        } ,
        {new:true}
    )
      const { password, ...rest} =updateUser._doc;    
        res.status(200).json({
            success:true,
            message:"user updated successfully",
            data:rest
        })

    } catch (error) {
        next(error)
    }
}