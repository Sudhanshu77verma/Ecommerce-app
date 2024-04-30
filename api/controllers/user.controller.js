import User from "../models/userModel.js";

export const signout =async(req,res,next)=>{
    try {
      
        res.clearCookie("token");
        res.json({
            message:"Log out successfully",
            success:true,
            error:false
        })
    } catch (error) {
        next(error)
    }
} 


export const alluser=async(req,res,next)=>{
    try {
    const users=await User.find()
    res.status(200).json({
        success:true,
        data:users,
        message:"All users ",
        error:false
    })
    
    
        
    } catch (error) {
        next(error)
    }
}