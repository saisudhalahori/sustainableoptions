import React, { useState, useEffect }  from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './Adminhome.scss'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featured/Featured'
import { List } from '@mui/material'
import Chart from '../../Components/chart/Chart'
import Table from '../../Components/table/Table'
// import {firebase} from 'firebase/app';
import {analytics} from '../../firebase'



const Adminhome = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
      
     useEffect(()=>{
      const fetchAnalyticsData = async () => {
            try{
              const analyticsData = await analytics.getAnalyticsData();

              // Set analytics data to state
              setAnalyticsData(analyticsData);
                 
                     
    
           }catch(error){
            console.error('Error fetching analytics data:', error);

         }

        }
        fetchAnalyticsData();
        return () => {
          // Cleanup code if needed
        };
    
    
     },[])
    console.log(analyticsData)  
  return (
    <div className='Admin_home'>
 
      <Sidebar />
      <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured /> 
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div> 
          <div className="listContainer">
            <div className="listTitle">latest transections
    
            </div>
            {/* <Table /> */}
          </div>
      </div>
    </div>
  )
}

export default Adminhome