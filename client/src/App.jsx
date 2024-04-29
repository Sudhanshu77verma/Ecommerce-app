
import React, { useEffect } from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Header from './components/Header.jsx'
import Footer from  "./components/Footer.jsx"
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Signup from './pages/Signup.jsx'
import Context from './context/index.js'
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
     
     <main className='min-h-[calc(100vh-120px)]'>
     <Routes>
     <Route path='/' element={<Homepage></Homepage>}></Route>
     <Route path='/login' element={<Login></Login>} ></Route>
     <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path='/sign-up' element={<Signup></Signup>} ></Route>
      
      </Routes>
      </main>
  
     <Footer>

      </Footer>

   {/* </Context.Provider> */}

   </BrowserRouter>
     </div>
  )
}
