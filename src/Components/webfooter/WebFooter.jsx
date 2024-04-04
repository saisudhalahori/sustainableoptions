import React from 'react'
import './WebFooter.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const WebFooter = () => {
  return (   
  <div className="footer-container2">
  <div className="basic-details">
   <img src='./images/logoimage.jpeg' alt=""/>
   <div className="socialmedia-icons">
      
     <ul id="icons">
      <li><FacebookIcon /></li>
      <li><TwitterIcon /></li>
      <li><InstagramIcon /></li>
      <li><YouTubeIcon /></li>
     </ul>
     <li className='rights_container'>Copyright ©2024 All Rights Reserve By Sustainable Options</li>
   </div>
   
  </div>
<div className='link_class'>
  <div className="quick-link">
      <h3>Quick-link</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Biochar Project</li>
      <li>Services</li>
      <li>Contact Us</li>
    </ul>
  </div>
  <div className="resources">
      <h3>Important Links</h3>
      <ul>
          <li>Terms & Conditions</li>
          <li>Legal</li>
          <li>Partners</li>
         
      </ul>
  </div>
  <div className="contact-info">
      <h3>Contact-Info</h3>
          <ul>
          <li><FmdGoodIcon /> Pittrachhaya, Behind NLIU Kerwa Dam Road, Bhopal, Madhya Pradesh, India</li>
                <li><SettingsPhoneIcon /> +91 9340291613(Asia)<br/></li>
                <li><SettingsPhoneIcon /> +91 9340291613(Asia)<br/></li>
                <li><MailOutlineIcon />  saksena.rahul@gmail.com</li>
             </ul>
    </div>
    </div>
</div>
)
}


export default WebFooter;