import React from 'react'
import './Projects.css'
import Sidebar from './Sidebar'
import Content from './Content/Content'
import Profile from './Profile/Profile'


const Projects = () => {


    return(
        <div className='sidebar'>
            <Sidebar/>

            <div className="project-content">
                <Content/>
                <Profile/>
            </div>
  
        </div>
    )
}

export default Projects
