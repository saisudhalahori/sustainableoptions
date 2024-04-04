import React, { useEffect } from 'react'
import './Home.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
import HomeContainer from '../../Components/homecontainer/HomeContainer'
import Missiondata from '../../Components/mission&visiondata/Missiondata'
// import {analytics,app} from '../../firebase'

import { getAnalytics, logEvent } from "firebase/analytics";


const Home = () => {
  useEffect(()=>{
    const analytics = getAnalytics();
logEvent(analytics, 'goal_completion', { name: 'lever_puzzle'});
  },[])
  return (
   

<>
      <WebNavbar />
      <HomeContainer />
      <Missiondata />
      <WebFooter />
     
      </>
      
  )
}

export default Home