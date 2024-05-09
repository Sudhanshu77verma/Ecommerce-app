import React, { useEffect } from 'react'
import CategoryList from '../components/CategoryList'
import Banner from '../components/Banner'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VertcalCardProduct'

function Homepage() {
 
  return (
    <div className=' overflow-y-scroll' >

      <CategoryList></CategoryList>

    <Banner></Banner>
   

    <HorizontalCardProduct category={"airpodes"} heading={"Top's-Airpodes"}></HorizontalCardProduct>
    <HorizontalCardProduct category={"watches"} heading={"Popular's watches"}></HorizontalCardProduct>


    <VerticalCardProduct category={"mobiles"} heading={"Popular's Mobiles"}/>
    <VerticalCardProduct category={"mouse"} heading={"Mouse"}/>
    <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
    <VerticalCardProduct category={"televisions"} heading={"Television"}/>
    <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
    <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
    <VerticalCardProduct category={"processor"} heading={"Processor"}/>
    <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    <VerticalCardProduct category={"printers"} heading={"Printers"}/>
    <VerticalCardProduct category={"speakers"} heading={"Speaker"}/>



    </div>
  )
}

export default Homepage