import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import NewProject from './Components/Projects/NewProject';
import Task from './Components/Projects/Task/Task'
import ProjectDetails from './Components/Projects/Content/ProjectDetails';
import EditProject from './Components/Projects/Content/EditProject'

function App() {


  return ( 
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/signup' element={<SignUp/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/dashboard' element={<Dashboard/>}> </Route>
          <Route path='/projects' element={<Projects/>}> </Route>
          <Route path='/newProject' element={<NewProject/>}> </Route>
          <Route path='/task/:id' element={<Task/>}> </Route>
          <Route path='projects/projectDetails/:id' element={<ProjectDetails/>}> </Route>
          <Route path='/editProject/:id' element={<EditProject/>}> </Route>
        </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;