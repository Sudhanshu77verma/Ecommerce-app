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
        
    } catch (error) {
        next(error)
    }
}