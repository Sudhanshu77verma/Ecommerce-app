
import React, { useState } from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Header from './components/Header.jsx'

import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Signup from './pages/Signup.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Context from './context/index.js'
import AllUser from './pages/AllUser.jsx'
import AllProduct from './pages/AllProduct.jsx'
import CategoryProduct from './pages/CategoryProduct.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { useEffect } from 'react'
import Cart from './pages/Cart.jsx'
import SearchPage from './pages/SearchPage.jsx'
export default function App() {
 
  const [countcart,setcountcart]=useState(0)

  const fetchuserDetails=async()=>{
      const res =await fetch('/api/user/userDetails');
      const data = await res.json()
      console.log(data)
  } 

  const fetchcount=async ()=>{
   const res= await fetch('/api/cart/countcart')
    const resdata= await res.json()

    if(resdata.success)
     {  
        console.log("count",resdata.data)
       setcountcart(resdata.data)
     }
 }  

      
  useEffect(()=>{
  fetchuserDetails()
  fetchcount()
  },[])

  

  return (

  
   <div>
  <BrowserRouter>
   <Context.Provider value={{
   fetchuserDetails ,
   countcart,
   fetchcount,
   }}>


      <Header></Header>
     
     <main className='pt-16'>
     <Routes>
     <Route path='/' element={<Homepage></Homepage>}></Route>
     <Route path='/login' element={<Login></Login>} ></Route>
     <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path='/sign-up' element={<Signup></Signup>} ></Route>
   <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>


      <Route path='/admin-panel' element={<AdminPanel></AdminPanel>}>
        <Route path='all-users' element={<AllUser></AllUser>}></Route>
        <Route path='all-products' element={<AllProduct></AllProduct>}></Route>
         </Route>
      

      <Route path='/category-product' element={<CategoryProduct></CategoryProduct>}></Route>
     
     <Route path='/cart' element={<Cart></Cart>}></Route>


  <Route path='/search' element={<SearchPage></SearchPage>}></Route>

      </Routes>
      </main>
  
   

   </Context.Provider>

   </BrowserRouter>
     </div>
  )
}
