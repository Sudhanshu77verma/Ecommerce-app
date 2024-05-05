import User from "../models/userModel.js"

export const uploadPermission= async(userId)=>
{
   const user= await User.findById(userId)
   if(user.role !== "ADMIN")
    {
        return false
    }
    else {
        return true
    }

}