

import Home from './webpages/home/Home'
import AboutUs from './webpages/aboutus/AboutUs'
 import BioCharProject from './webpages/biocharproject/BioCharProject'
import Services from './webpages/services/Services'
import ContactUs from './webpages/contactus/ContactUs'
import Team from './Components/team/Team'
import Client from './Components/client/Client'
import Career from './webpages/career/Career'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
function App() {


  return (
    <>
      <div className="App">
 

        <BrowserRouter>
       
         <Routes >
         <Route index element={<Home />} />
         <Route path='/about' >
          <Route index element={<AboutUs />} />
         <Route path='team' element={<Team />}/>
         <Route path='client' element={<Client />}/> 
         </Route>
     
         <Route path='/biochar' element={<BioCharProject />}/>
         <Route path='/service' element={<Services />}/>
         <Route path='/contact' element={<ContactUs />}/>
        
         <Route path='/service' element={<Services />}/>
         <Route path='/career' element={<Career />}/>
         
        </Routes> 
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
