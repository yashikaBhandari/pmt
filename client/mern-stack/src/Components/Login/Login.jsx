import React, { useState } from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';


// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Login logic here
    axios.post("http://localhost:2001/login", {email, password})
    .then(user => {console.log(user)
 
        if(user.data ==="Success") {
          navigate('/dashboard')
        } else {
          navigate('/')
        }
  })
}

  return (
    <div className="wrapper">
    <form className="container" onSubmit={handleSubmit}>
      
        <div className="text">Login</div>
      
      
      <div className="inputs">
  
          <div className="input" >
            <img src="" alt="" />
            <input type="email" 
            placeholder='Email' 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
      <div className="submit-container">
        <input type='submit' className="submit" value='Login'/>
      </div>
    </form>
  
  <div className="forgot-password">Forgot password? <span>Click here</span>
  <b><p>Don't have an account? Create account  <Link to='/signup' className='login'> Sign up</Link></p> </b>
  
  </div>
  </div>
  );
};


export default Login;
