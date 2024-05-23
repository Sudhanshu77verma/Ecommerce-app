
import Product from '../models/productMode.js'

export const querywiseProduct = async(req,res,next)=>{
    try {

const category = req.query.category ;
const sort = req.query.sort === 'desc' ? -1 : 1 
if(req.query.category === '')
    {
        const alldata= await Product.find().sort({price :sort})
        res.json({
            success:true,
        data:alldata,
        message:"all product",
        error:false 

        })
    }

  const regex =  new RegExp(category,'i','g')
  const data =await Product.find({
    category:regex
  }).sort({sellingPrice :sort})

    res.json({
        success:true,
        data:data,
        message:"get category wise product",
        error:false
    })
        
    } catch (error) {
       next(error) 
    }
}