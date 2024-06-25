import './Content.css'

import React from 'react'
import ContentHeader from './ContentHeader'
import Card from './Card'
import ProjectList from './Projectlist';



const Content = () =>{
    return(
        <div className='content'>
            <ContentHeader/>
            <Card/>
            <ProjectList/>
        </div>
    )
}

export default Content