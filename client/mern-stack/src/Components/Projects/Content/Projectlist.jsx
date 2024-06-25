import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Content.css'

import image3 from '../../../assets/gospel.jpg'

const ProjectList = () => {

    const [projects, setProjects] = useState([])
    const [projectId, setProjectId] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:2001/getProjects')
        .then(response => {
            setProjectId(response.data)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        // Login logic here
        axios.post(`http://localhost:2001/projectDetails/${projectId}`)
        .then(projectDeets => {
             navigate('/projectDetails')
         })
         .catch(error => {console.log(error)})
    }

    const EditProject = (event) => {
        try{
        event.preventDefault();
        console.log('Project ID: ' + projectId)
            navigate(`/editProject/${projectId}`)
        } catch(error){
            console.log(error)
        }
    }

    const DeleteProject = (event) => {
        try{
        event.preventDefault();
        // Login logic here
        axios.get(`http://localhost:2001/deleteProject/${projectId}`)
        } catch(error){
            console.log(error)
        }    
    }


    return(
        <div className='project-list'>

            {projects.length > 0 ? (  

            <div className="projectlist-container">
                  <h1>Created Projects</h1>

                {projects.map(project => (
                    
                    <div className="list">
                        <div className="project-detail">
                            <img src={image3} alt="image" />
                        </div> 
                            <Link className='list-link'  to={`/projects/projectDetails/${project._id}`}>{project.name} </Link>
                                <form onSubmit={EditProject}>
                                    <input type="text" value={project._id} onChange={(event) => setProjectId(event.target.value)} hidden/>
                                    <input type="submit" className='edit-project' value={'Edit'} />
                                </form>

                                <form onSubmit={DeleteProject}>
                                    <input type="text" value={project._id} onChange={(event) => setProjectId(event.target.value)} hidden/>
                                    <input type="submit" className='delete-project'   value={'Delete'}/>
                                </form>
                            
                        <span className='project-todo'>:</span>
                    </div>
                ))}
            </div>

            ) :(
                <div className="list-header">
                        ...
                </div>
            ) }
        </div>
    );
}

export default ProjectList