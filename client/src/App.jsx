
import React from 'react'
import { Route, Router,Routes} from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Header from './components/Header.jsx'
import Footer from  "./components/Footer.jsx"
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Signup from './pages/Signup.jsx'
export default function App() {
  return (
   <div>
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

   
     </div>
  )
}
