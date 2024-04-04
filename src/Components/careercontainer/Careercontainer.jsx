import React from 'react'
import './Careercontainer.scss'
import Internshipform from '../contactuscontainer/Internshipform'
const Careercontainer = () => {
  return (<>
    <div className='careercontainer'>
    
        <h1>Work With Us</h1>
        
    </div> 
    <div className='internship_enquiry_img_form'>
      <div className="internship_form">
        <h1>WE ARE HIRING</h1>
         <Internshipform />
      </div>
    </div>
    </>
  )
}

export default Careercontainer