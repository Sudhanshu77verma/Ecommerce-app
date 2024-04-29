import User from "../models/userModel.js"

export const userDetails=async(req,res,next)=>{
    try {
        console.log(req.userId)
    const user = await User.findById(req.userId);
    res.status(200).json({
        data:user,
        error:false,
        success:true,
        message:"userDetails"
    })

    } catch (error) {
        next(error)
    }
}