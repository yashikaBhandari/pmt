import React from 'react'
import axios from 'axios'
import { BsFile, BsFilePlus, BsGear } from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import './Content.css'



const Card = () =>{
    const navigate = useNavigate()
     const handleSubmit = (event) => {
    // Login logic here
    axios.get("http://localhost:2001/newProject")
    .then(data => {
       
        navigate('/newProject')
  })
} 
    return(
        <div className='project-container'>
          
            <div className="project">
                <div className="project-cover"> New Project</div>
                <div className="project-title">
                  <Link to='/newProject' > <BsFilePlus className='icon' onClick={handleSubmit} /></Link>
                    <a href="/newProject"  onClick={handleSubmit}>Create Project</a>
                </div>
            </div>
            <div className="project">
                <div className="project-cover"> New Manager</div>
                <div className="project-title">
                <BsFilePlus className='icon'/>
                    <h2>Course</h2>
                </div>
            </div>
            <div className="project">
                <div className="project-cover"> New Task</div>
                <div className="project-title">
                <BsFilePlus className='icon'/>
                    <h2>Course</h2>
                </div>
            </div>
         
        </div>
    )
}

export default Card