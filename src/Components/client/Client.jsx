import React from 'react'
import './Client.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
const Client = () => {
  return (
 
  
    <div className='client'>
      <WebNavbar />
        <div className="client_main_container">

            <h1 className='client_heading'>Our <span className='client_span'>Clients</span><br/><img src="\public\leafimage.png" alt="" /></h1>
            </div>
            <div className='client_main_imgdiv'>
                <div>
            <img className='client_image' src="\public\walmi.png" alt="image" />
            <img className='client_image' src="\public\FES.jpg" alt="image" />
            <img className='client_image' src="\public\adityabirla_grasim.jpg" alt="image" />
            <img className='client_image' src="\public\adityabirla_HIndalco.jpg" alt="image" />
            </div>
            <br/>
            <div>
            <img className='client_image' src="\public\IIT Roorkee.jpg" alt="image" />
            <img className='client_image' src="\public\JREDA.jpg" alt="image" />
            <img className='client_image' src="\public\Ministry of Forest and Farmerwalfare.jpg" alt="image" />
            <img className='client_image' src="\public\MP Forest Department.jpg" alt="image" />
            </div>
            <div>
            <img className='client_image' src="\public\MPSTDC.jpg" alt="image" />
            <img className='client_image' src="\public\MPUVN.jpg" alt="image" />
            <img className='client_image' src="\public\PWC.png" alt="image" />
            <img className='client_image' src="\public\GTZ international.jpg" alt="image" />
            </div>
            <div>
            <img className='client_image' src="\public\NTPC.jpg" alt="image" />
            <img className='client_image' src="\public\UPNEDA.jpg" alt="image" />
            <img className='client_image' src="\public\AMPRI BHOPAL.png" alt="image" />
            <img className='client_image' src="\public\inseda.jpg" alt="image" />
            </div>
            </div>

      
        <WebFooter />
        </div>
       
  )
}

export default Client