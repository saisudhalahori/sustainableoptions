import React from 'react'
import './BioCharProject.css'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
import BiocharContainer from '../../Components/biocharcontainer/BiocharContainer'


const BioCharProject = () => {
  return (
    <div className='biocharproject'>
     <WebNavbar />
     <BiocharContainer />
     <WebFooter />
        </div>
  )
}

export default BioCharProject