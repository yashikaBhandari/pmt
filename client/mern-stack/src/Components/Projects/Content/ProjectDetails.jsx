import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import axios from 'axios';
    import './Content.css';

    const ProjectDetails = () => {
      const { id } = useParams();
      let [name, setName] = useState('');
      let [description, setDescription] = useState('');
      let [startDate, setStartDate] = useState('');
      let [endDate, setEndDate] = useState(Date);
      let [status, setStatus] = useState('');
      let [project, setProject] = useState('');
      
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      axios.defaults.withCredentials = true;

      useEffect(() => {
        const fetchProject = async () => {
          try {
            const response = await axios.get(`http://localhost:2001/projectDetails/${id}`);
            
            setName(response.data.name)
            setDescription(response.data.description)
            setEndDate(response.data.endDate)
            setStatus(response.data.status)
      
            setLoading(false);
          
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };

        fetchProject()
      
    }, [id]);

      

      if (loading) return <div className='loading-div'>Loading...</div>;
      if (error) return <div className='error-div'>Error: {error.message}</div>;

      return (
        <div className="project-deets-container">
       
            <div className='project-deets'>

              <div className="project-title">
                <h1>Project Name: {name}</h1>
              </div>
              <div className="project-title">
                <h2>Description: {description}</h2>
              </div>
              <div className="project-title">
                <h3>Due date: {endDate}</h3>
              </div>
              <div className="project-title">
                <h4>Status: {status}</h4>
              </div>

             </div>

            <div className='project-deets-aside'>
           
              <form action="" className='edit-form'>
                <h1>ADD TASK</h1>
           
                <label htmlFor="">Task:</label>
                <input type="text" className='add-task'/>

                <input type="submit" />
              </form>

              <form action="" className='edit-form'>
                <h1>ASSIGN MANAGER</h1>
           
                <label htmlFor="">MANAGER</label>
                <input type="text" className='add-task'/>
                <input type="submit" />

              </form>
            </div>
      
          <div>
          </div>
        </div>
      );
    };

    export default ProjectDetails;
    
