import React from 'react'
import {BsFillArchiveFill,
        BsFilePlus,
        BsGear,
        BsCheckSquare, BsCardChecklist, BsListCheck,
        BsDoorOpen,
        BsGraphUp,
        BsChat,
        BsEnvelope,
        BsPeople,} from 'react-icons/bs'
import './Sidebar.css'

const Sidebar  = () => {
    return(
        <div className="menu"> 
            <div className="logo">
            <BsFillArchiveFill className="logo-icon" />
            <h2>Projects</h2>
            </div>

            <div className="menu-list">
                <a href="#" className='items active'>
                    <BsFillArchiveFill className='icon'/>
                    Projects
                </a>
            </div>
            <div className="menu-list">
                <a href="#" className='item'>
                    <BsGear className='icon'/>
                    Manage project
                </a>
            </div>
            <div className="menu-list">
                <a href="#" className='item'>
                    <BsCheckSquare className='icon'/>
                    Tasks
                </a>
            </div>
            <div className="menu-list">
                <a href="#" className='item'>
                    <BsGraphUp className='icon'/>
                    Stats
                </a>
            </div>
            <div className="menu-list">
                <a href="#" className='item'>
                    <BsEnvelope className='icon'/>
                    Message
                </a>
            </div>
            <div className="menu-list">
                <a href="#" className='item'>
                    <BsPeople className='icon'/>
                    Team
                </a>
            </div>

        </div>
    )
}

export default Sidebar