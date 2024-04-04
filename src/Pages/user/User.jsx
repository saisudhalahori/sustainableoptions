import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './User.scss'


import { List } from '@mui/material'

import Table from '../../Components/table/Table'


const User = () => {
  return (
    <div className='Admin_home'>
 
      <Sidebar />
      <div className="homeContainer">
          <Navbar />
         
          
          <div className="listContainer">
            <div className="listTitle">latest transections
    
            </div>
            {/* <Table /> */}
          </div>
      </div>
    </div>
  )
}

export default User