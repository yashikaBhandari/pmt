import React from 'react';
import Navbar from '../Navbar/Navbar'
import Circle from './Circle'
import './Home.css'


function Home() {

  return ( 
    <div>
      <Navbar/>

      <div className='hero'>
          <Circle/>
          <a href='/login'>Get Started</a>
      </div>
    
    </div>
  );
}

export default Home;