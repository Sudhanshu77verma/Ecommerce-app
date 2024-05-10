
const fetchcategorywiseprodcut= async(category)=>{
    const res =await fetch('/api/product/getcategorywiseProduct',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            category:category
        })

    
    })

     const resdata= await res.json()
     
     return resdata.data

}

export default fetchcategorywiseprodcut