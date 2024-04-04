import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { authDeclined } from '../../Redux/Authentication';
import { internship } from '../../Redux/firebaseSlice';
import { useDispatch, useSelector } from 'react-redux';


const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
 
 const handlelogout= () =>{
  sessionStorage.removeItem("currentuser")
  dispatch(authDeclined());
 }


  return (
    <div className='sidebar'>
     <div className="top">
        <span className='logo' >Admin</span>
     </div>
     <div className="center">
        <ul>
        <p className='title'>MAIN</p>
        <li>
          
            <DashboardIcon className='icon'/>
            <span onClick={()=>navigate('/admin')}> Dashboard</span>
            </li>
            <p className='title'>LIST</p>
            <li>
          
            <PeopleIcon className='icon'/>
            <span onClick={()=>navigate('/admin/user')}>
              Users</span>
            </li>
            <li>
            <Inventory2Icon className='icon'/>
            <span onClick={()=>navigate('/admin/enquiry') }
            >Enquiry</span>
            </li>
            <li>
            <BorderStyleIcon className='icon'/>
            <span  onClick={()=>navigate('/admin/internship') }>Internship</span>
            </li>
           
            <p className='title'>USEFUL</p>
            <li>
          
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
            </li>
            <li>
           <NotificationsIcon className='icon'/>
            <span>Notification</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
           
            <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span>
            </li>
            <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
            </li>
            <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
            </li>
            <p className='title'>USER</p>
            <li>
           
            <AssignmentIndIcon className='icon'/>
            <span>Profile</span>
            </li>
            <li onClick={handlelogout}>
            <LogoutIcon className='icon'/>
            <span>Log Out</span>
            </li>

      
        </ul>
  
     <div className="bottom">
     <div className="colorOption"></div>
     <div className="colorOption"></div>
     <div className="colorOption"></div>
     </div>
     </div>
    </div>
  )
}

export default Sidebar