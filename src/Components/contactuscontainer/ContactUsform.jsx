import React, { useState } from 'react';
import './ContactUsform.scss'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to a server
    console.log(formData);
    // Reset the form after submission
    const docRef = await addDoc(collection(db, "Enquiry"), {
    ...formData, 
    TimeStamp:serverTimestamp()

    });
    alert('Messege Send');
   setFormData({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
   })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <br />

      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="requirements">Enter Your Requirements:</label>
      <textarea
        id="requirements"
        name="requirements"
        rows="4"
        value={formData.requirements}
        onChange={handleChange}
        required
      ></textarea>

      <br />

      <input type="submit" className='btn'  value="Send Message" />
    </form>
  );
};

export default ContactForm;
