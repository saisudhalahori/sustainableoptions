import React, { useState } from 'react'
import './Internshipform.scss'
import { doc, addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL ,uploadBytes } from "firebase/storage";
import { useEffect } from 'react';





const Internshipform = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    query: '',

  });
 const [file, setFile] = useState('')

 const [perc,setPerc] = useState(null)

console.log(formData)
 useEffect(()=>{
  const uploadFile = ()=>{
    const name = new Date().getTime() + file.name
        
    const storageRef = ref(storage, file.name); 

    
    const uploadTask = uploadBytesResumable(storageRef, file);

   uploadTask.on('state_changed', 
    (snapshot) => {
 
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       setPerc(progress)
switch (snapshot.state) {
  case 'paused':
    console.log('Upload is paused');
    break;
  case 'running':
    console.log('Upload is running');
    break;

    default :
      break ;
}
}, 
(error) => {
  console.log(error)
}, 
() => {

getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  
  setFormData((prv) =>({...prv,CV:downloadURL}))
  console.log(downloadURL)
 
  
});
}
 )}

  
  file && uploadFile()
},[file])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  

    await addDoc(collection(db, "Internship"), {
      ...formData, 
      timestamp:serverTimestamp()
    });

    setFormData({
      name: '',
      contactNo: '',
      email: '',
      query: '',
      
    
    });
    setFile(null)
    document.getElementById("filefield").value ="";
    
    alert("form submited successfully")
  };

  return (
    <form className="internship-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text"  name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Contact No.:
        <input type="number" id='contact_type' name="contactNo" value={formData.contactNo} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email"  name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Any Query:
        <textarea id="any_query" name="query"  value={formData.query} onChange={handleChange}></textarea>
      </label>
      <br />
      <label>
Upload CV:
<input type="file" id="filefield" accept=".pdf, .doc, .docx" onChange={(e)=>setFile(e.target.files[0])}  required/>
</label>
      <br />
      <button className='btn' type="submit" >Submit</button>
    </form>
  );
}

export default Internshipform

