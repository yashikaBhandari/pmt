import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Component from '../Component/Component'
import axios from 'axios'
import { useEffect } from 'react'


const Dashboard = () => {
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.get('http://localhost:2001/dashboard') 
        .then(user => {console.log(user)
            if(user.data !== "Success"){
                navigate('/login')
            }
         
        })
       .catch((error) => console.log(error))
    }, [])

    return( 
       <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <Component/>
       </div>
    )
}

export default Dashboard