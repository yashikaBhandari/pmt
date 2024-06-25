import './Content.css'
import React from 'react'
import { BsSearch, BsBell } from 'react-icons/bs'

const ContentHeader = () =>{
    return(
        <div className='content-header'>
            <h1 className='header-title'> Projects</h1>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder='Search anything here...' />
                    <BsSearch className='icon'/>
                </div>

                <div className="notify">
                    <BsBell className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader