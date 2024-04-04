
import React from 'react'
import './Career.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
import Careercontainer from '../../Components/careercontainer/Careercontainer'
const Career = () => {
  return (
    <div className='career'>
     <WebNavbar />
<Careercontainer />

     <WebFooter />
        
    </div>
  )
}

export default Career