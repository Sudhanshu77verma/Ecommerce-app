import React, { useState } from 'react'
import image1 from '../assest/banner/img1.webp'
import imageMobile1 from '../assest/banner/img1_mobile.jpg'
import imageMobile2 from '../assest/banner/img2_mobile.webp'
import imageMobile3 from '../assest/banner/img3_mobile.jpg'
import imageMobile4 from '../assest/banner/img4_mobile.jpg'
import imageMobile5 from '../assest/banner/img5_mobile.png'
import image3 from '../assest/banner/img3.jpg'
import image2 from '../assest/banner/img2.webp'

import image5 from '../assest/banner/img5.webp'
import image4 from '../assest/banner/img4.jpg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useEffect } from 'react'


function Banner() {

   const mobileImages =[imageMobile1
    ,imageMobile2,imageMobile3,imageMobile4,imageMobile5]

    const desktopImages =[image1,image2,image3,image4,image5]
  
    const [currentIndex,setcurrentIndex]= useState(0)
  

    const decreasehandler=()=>{
      
        if(currentIndex !=0)
            {
                setcurrentIndex(prev =>prev-1 )
            }
    }
    const increasehandler=()=>{
        if(desktopImages.length-1> currentIndex)
     setcurrentIndex(prev =>prev+1)
    }
     
    useEffect(()=>{
        const interval= setInterval(() => {
            if(desktopImages.length-1> currentIndex)
            {
                increasehandler()
            }
            else {
                setcurrentIndex(0)
            }
        }, 4000);
    
        return ()=>clearInterval(interval)
    } ,[currentIndex]) 
    
  return (
    <div className='container mx-auto px-4  rounded-md ' >
        
        <div className=' h-64 md:h-72 w-full bg-slate-300  relative'>
    
     




<div className='w-full h-full  absolute z-10  flex items-center '>
        <div className='w-full  flex justify-between  text-4xl text-slate-500'>
            <button className='' onClick={decreasehandler}><FaAngleLeft className='h-8 w-8 bg-slate-400 text-black px-1 mx-1 rounded-full hover  '></FaAngleLeft></button>
            <button onClick={increasehandler}><FaAngleRight  className='h-8 w-8 bg-slate-400 text-black px-1 mx-1 rounded-full hover  '></FaAngleRight></button>
        </div>
     </div>


 {/* tab version */}

     <div className='w-full h-full hidden md:flex overflow-hidden'>
{   
   



        desktopImages.map((img,index)=>{
            return (
             
      <div key={index} className='h-full w-full min-w-full min-h-full transition-all duration-1000  ' style={{transform:`translateX(-${currentIndex*100}%)`}}>
      <img src={img} className='w-full h-full object-fill'  />
      </div>

            )
        })
     }



</div>

<div className='w-full h-full flex overflow-hidden md:hidden'>
{   
   



        mobileImages.map((img,index)=>{
            return (
             
      <div key={index} className='h-full w-full min-w-full min-h-full transition-all duration-1000   ' style={{transform:`translateX(-${currentIndex*100}%)`}}>
      <img src={img} className='w-full h-full object-fill'  />
      </div>

            )
        })
     }



</div>
        </div>
    </div>
  )
}

export default Banner