

const url=`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`

const uploadImage= async(image)=>{
  const formdata= new FormData()
  formdata.append("file",image)
  formdata.append("upload_preset","mern_product")
    const res=await fetch(url,{
        method:"post",
        body:formdata
    })

    return   res.json()
}
export default uploadImage