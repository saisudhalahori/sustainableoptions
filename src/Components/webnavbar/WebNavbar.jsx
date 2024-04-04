import React, { useState } from 'react'
import './WebNavbar.scss'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


export default function  WebNavbar() {
  let [openmanu , setmanu] = useState(false)
  let [dropdown , setDropdown] = useState(false)
  let navigate = useNavigate()

  function handelclicl(){
    setmanu(!openmanu)
  }
  return (
    <>
    
    <nav>
    <img
    className='name'
    src="./images/logoimage.jpeg" alt="" 
    />

      <div>
       
        <ul className={openmanu ? "navbar active" :"navbar"} >
          <li><Link to='/'>Home</Link></li>

          <li onMouseEnter={()=>setDropdown(true)}
        
          ><Link to='/about' 
          
          
          >AboutUs</Link> 
           <ul className={dropdown ? 'dropdown_link':'dropdown_hide'}
          
           onMouseLeave={()=>setDropdown(false)}
           >
            <li onClick={()=>navigate('/about/team')}>Team</li>
            <li onClick={()=>navigate('/about/client')}>Client</li>
            </ul>
            </li>
       
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/biochar'>BioCharProject</Link></li>
          <li><Link to='/career'>Career</Link></li>
          <li><Link to='/contact'>ContactUs</Link></li>

          
        </ul>
      </div>
      
      <div className='mobile' onClick={handelclicl}>{openmanu ?  < CloseIcon color='white' /> : <MenuIcon color='white' />  }
      
      
      
      </div>
      
    </nav>
   
    </>
  )
}
