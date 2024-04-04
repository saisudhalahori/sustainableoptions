import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Enquiry.scss';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { List } from '@mui/material';
import Table from '../../Components/table/Table';

const Enquiry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Enquiry"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className='Admin_home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Latest Enquiries</div>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
