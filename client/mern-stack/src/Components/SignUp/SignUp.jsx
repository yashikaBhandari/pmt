 import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './SignUp.css';
import {useNavigate} from 'react-router-dom'



const SignUpPage = () => {
  
const [username, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const navigate = useNavigate()

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:2001/signup',    {username, email, password}) 
 .then(user => {console.log(user)
  navigate('/login')
 })
.catch((error) => console.log(error)) }

return(
  <div className="wrapper">
  <form className="container" onSubmit={handleSubmit}>
    
      <div className="text">Sign Up </div>
    
    
    <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text"
          placeholder='Name' 
          value={username} 
          onChange={(event) => setName(event.target.value)}/>
        </div>

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
        <div className="input">
          <img src="" alt="" />
          <input type="password" 
          placeholder='Confirm Password' 
          value={confirmPassword} 
          onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
      </div>


    <div className="submit-container">
      <input type='submit' className="submit" value='Sign Up'/>
    </div>
  </form>

<div className="forgot-password">Forgot password? <span>Click here</span>
<b><p>Already have an account? <Link to='/login' className='login'> Login</Link></p> </b>

</div>
</div>
)
}


export default SignUpPage;
 