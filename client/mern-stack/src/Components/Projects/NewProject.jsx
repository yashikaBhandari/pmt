import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './NewProject.css'


const NewProject = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const [user, setUserId] = useState('');
    const [task, setTaskId] = useState('');
    const [projectId, setProjectId] = useState('');

    const navigate = useNavigate()


    useEffect(()=>{
        const fetchSession = async () => {
            try {
                const response = await axios.get('http://localhost:2001/userId', {
                    withCredentials: true
                });

                if(response.status === 200){
                    setUserId(response.data.data)    
                }else {
                    console.log("User not logged in")
                    }
                } catch(error){
                    console.error("Error fetching data")
                }
            } 

            fetchSession()
    }, [])

    axios.defaults.withCredentials = true;


    const handleSubmit = async(event) => {

        event.preventDefault();
        const response = await  axios.post('http://localhost:2001/createProject',    {name, description, startDate, endDate, status: 'To Do' ,user, task }) 
        const projectId = response.data
        navigate(`/task/${projectId}`)
        // navigate(`/dashboard`)
       }

     

    return(
        <div className="new-project-container">
                <div className="navbar">
                    <h1>NEW PROJECT</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="project-title">
                        <label htmlFor="title">Project Title</label>
                        <input 
                        type="text" 
                        className="title" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)
                        }
                        required/>
                    </div>

                    <div className="project-title">
                        <label htmlFor="description">Project Description</label>
                        <input 
                        type="text" 
                        className="description" 
                        value={description}  
                        onChange={(event) => setDescription(event.target.value)}
                        required/>
                    </div>

                    <div className="project-title">
                        <label htmlFor="startDate">Start Date</label>
                        <input 
                        type="date" 
                        className="startDate" 
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                        required/>
                    </div>

                    <div className="project-title">
                        <label htmlFor="endDate">Due Date</label>
                        <input 
                        type="date" 
                        className="endDate" 
                        value={endDate} 
                        onChange={(event) => setEndDate(event.target.value)} 
                        required/>
                    </div>

                    <div className="project-title">
                    <label htmlFor="status"> Status</label>
                    <input type="text" className="status"
                     value={'To Do'}  
                    required/>      
                    </div>
                    
                     <input type="text" className="task"
                     value={''}  
                    hidden/>      
                
                   
                    <div className="project-title">
                    <input type='submit' className="submit" value='CREATE PROJECT'/>
                    </div>              
                </form>
        </div>
    )
}

export default NewProject