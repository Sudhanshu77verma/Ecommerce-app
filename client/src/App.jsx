
import React from 'react'
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
export default function App() {
 


  // const fetchuserDetails=async()=>{
  //     const res =await fetch('/api/user/userDetails');
  //     const data = await res.json()
  //     console.log(data)
  // } 

  // useEffect(()=>{
  // fetchuserDetails()
  // },[])
  return (

  
   <div>
  <BrowserRouter>
   {/* <Context.Provider value={{
   fetchuserDetails 
   }}> */}


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
      

      <Route path='/category-product/:categoryName' element={<CategoryProduct></CategoryProduct>}></Route>
      </Routes>
      </main>
  
   

   {/* </Context.Provider> */}

   </BrowserRouter>
     </div>
  )
}
