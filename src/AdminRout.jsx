import React, { useState } from 'react'
import Adminhome from './Pages/adminhome/Adminhome'
import Adminlogin from './Pages/adminlogin/Adminlogin'
import User from './Pages/user/User'
import Adminsingle from './Pages/adminsingle/Adminsingle'
import Adminnew from './Pages/adminnew/Adminnew'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Enquiry from './Pages/adminenquiry/Enquiry'
import Internship from './Pages/admininternship/Internship'
import { useSelector } from 'react-redux'




const AdminRout = () => {
  const {currentuser}  = useSelector(state=>state.auth) ; 

  const RequiredAuth = ({children})=>{
    return currentuser ? (children) : <Navigate to ='/admin/login' />
  }
  return (
<BrowserRouter>

<Routes>
  <Route path='/admin'>
    <Route index element={
     <RequiredAuth>
         <Adminhome />
     </RequiredAuth>
    } />
    <Route path='login' element={<Adminlogin />} />
    <Route path='user'>
      <Route index element={
      <RequiredAuth>
      <User/>
      </RequiredAuth>
    } />
      <Route path='single' element={<Adminsingle />} />
    </Route>
    <Route path='enquiry'>
    <Route index element={
    <RequiredAuth>
    <Enquiry />
    </RequiredAuth>
    } />

    
    <Route path='single' element={<Adminsingle />} />
    </Route>

    <Route path='internship'>
      <Route index element={
      <RequiredAuth>
      <Internship/>
      </RequiredAuth>
      } />
    </Route>
    <Route path='new' element={<Adminnew />} />
  </Route>

</Routes>
</BrowserRouter>
  

  )
}

export default AdminRout