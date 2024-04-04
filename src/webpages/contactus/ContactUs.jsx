import React from 'react'
import './ContactUs.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
import Contactuscontainer from '../../Components/contactuscontainer/Contactuscontainer'
// import ContactUsform from '../../Components/contactuscontainer/ContactUsform'



const ContactUs = () => {
  return (
    <div className='contactus'>
<WebNavbar />

<Contactuscontainer  />
{/* <ContactUsform /> */}
<WebFooter />
        </div>
  )
}

export default ContactUs