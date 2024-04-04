// Login.js
import React, { useState  } from 'react';
import './Adminlogin.scss';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { authDeclined, authorized  } from '../../Redux/Authentication';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
 const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      
    
    const user = userCredential.user;
    dispatch(authorized(true))
    navigate('/admin')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   dispatch(authDeclined(errorCode))
    // ..
  });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
