
import React from 'react'
import { Route, Router,Routes} from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Header from './components/Header.jsx'
import Footer from  "./components/Footer.jsx"
import Login from './pages/Login.jsx'
export default function App() {
  return (
   <div>
      <Header></Header>
    
     <Routes>
     <Route path='/' element={<Homepage></Homepage>}></Route>
     <Route path='/login' element={<Login></Login>} ></Route>
     </Routes>
     
  
     <Footer>

      </Footer>

   
     </div>
  )
}
