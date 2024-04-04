import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Internship.scss';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { internship } from '../../Redux/firebaseSlice';
import { List } from '@mui/material';
import Table from '../../Components/table/Table';

const Internship = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Internship"));
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
          <div className="listTitle">latest transactions</div>
          {data.length > 0 && <Table data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Internship;
