import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Task.css'

const Task = () => {
    const {id} = new useParams()

    const [task, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    let [projectId] = useState('')
    let [user] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    useEffect(()=>{
        const fetchSession = async () => {
            try {
                const response = await axios.get('http://localhost:2001/userId');
                    user = response.data.data
                } catch(error){
                    console.log(error)
                }
            } 

            fetchSession()
    }, [id])

    
   


    const handleSubmit = async(event) => {
        event.preventDefault();
        projectId = id
            try {
                const response = await axios.post(`http://localhost:2001/createTask`,  { 
                    task,
                    description,
                    projectId,
                    user,
                    dueDate,
                    status
                })
                    navigate('/projects')
                } catch(error){
                    console.error("Error fetching data")
                }
            } 



    return(
        <div className="add-task-container">
              
            <form onSubmit={handleSubmit} className='task-form'>
                    <h1>ADD TASK</h1>
                <div className="task-div">
                    <label htmlFor="task">Task Name:</label>
                    <input type="text" className='task' value={task}  onChange={(event) => setTaskName(event.target.value)} required />
                </div>
              
                    <input type="text" className='projectId' value={projectId} hidden/>
             
                    <input type="text" className='user' value={user} hidden/>
              
                <div className="task-div">
                    <label htmlFor="description">Task Description:    </label>
                    <input type="text" className='description' value={description}  onChange={(event) => setDescription(event.target.value)} required />
                </div>

                <div className="task-div">
                    <label htmlFor="dueDate">Task Due Date:</label>
                    <input type="date" className='dueDate' value={dueDate}  onChange={(event) => setDueDate(event.target.value)} required />
                </div>
                <div className="task-div">
                    <label htmlFor="manager">Manager:</label>
                    
                </div>
                
                
                    
                    <input type="text" className='status' value={"To Do"}  onChange={(event) => setStatus(event.target.value)} hidden />
                
                
                <input type="submit" className='submit' value={'Submit'}/>
            </form>
        </div>
    )

 
 };

export default Task;
