import React from 'react'
import './Contactuscontainer.scss'
import ContactUsform from './ContactUsform'




const Contactuscontainer = () => {
  return (
  <>
    <div className='contactus_container'>
    {/* <img className='contactus_image'  src="\contactus3.jpg" alt="image" /> */}
    <div className='contactus_container2'>
             <h1 className='contactus_hading'>Contact US</h1>
             
        </div>
      
        </div>
        <div className='email_google_flex'>
        <div className='email_form'>
          <h1 className='email_form_heading'>Connect US</h1>
          <p className='contactus_para'>Get in touch with us using the enquiry form or contact details below.</p>
          <ContactUsform  className='contact_us_main_form'/>
        </div>
       <div className="google_map">
        <h1 className='google_heading'>Our Location</h1>
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3667.468207089142!2d77.36469802437306!3d23.189601610076195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708947668635!5m2!1sen!2sin" 
        // width="50%" 
        height="auto"
        // alloweFullScreen
        loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe> 
          <div>
            <ul className='our_location_icon'>
          
          
              <li><a href="#"><i className="fa-solid fa-house-user"></i> Pittrachhaya, Behind NLIU Kerwa Dam Road, Bhopal, Madhya Pradesh, India</a></li>
              <li><a href="#"><i className="fa-solid fa-envelope"></i>sustainableoptions.bhopal@gmail.com</a></li>
              <li><a href="#"><i className="fa-solid fa-phone"></i>8827716689</a></li>
           
            
            </ul>
            </div>  
       </div>
        </div>
 
       </>
  )
}

export default Contactuscontainer