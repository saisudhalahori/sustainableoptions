import React from 'react'
import './Services.css'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
import Servicecontainer from '../../Components/serviceContainer/Servicecontainer'


const Services = () => {
  return (
    <div className='services'>
       <WebNavbar />
       <Servicecontainer />
       <WebFooter />
        </div>
  )
}

export default Services