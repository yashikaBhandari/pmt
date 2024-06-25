import './Profile.css'
import React from 'react'
import ProfileHeader from './ProfileHeader'
import userImage from '../../../assets/gospel.jpg'
import { BsFillArchiveFill } from 'react-icons/bs'

const Profile = () =>{
    return(
        <div className='profile'>
            <ProfileHeader/>

            <div className="user-profile">
                <div className="user-detail">
                    <img src={userImage} alt="user-image" />
                    <h3 className="username">Gospel Nwabua</h3>
                    <span className="profession">Web developer</span>
                </div>

                <div className="user-projects">

                    <div className="project-item">
                        <div className="project-detail">
                            <div className="project-cov"> <BsFillArchiveFill className='project-icon'/> </div>
                            <div className="project-name">
                                <h5>Project Management Tool</h5>
                                <span className="duration">1 week</span>
                            </div>
                        </div>
                        <div className="action">: </div>
                    </div>

                    <div className="project-item">
                        <div className="project-detail">
                            <div className="project-cov"> <BsFillArchiveFill className='project-icon'/> </div>
                            <div className="project-name">
                                <h5>Project Management Tool</h5>
                                <span className="duration">1 week</span>
                            
                            </div>
                            <div className="action">: </div>
                        </div>
                        
                    </div>

                    <div className="project-item">
                        <div className="project-detail">
                            <div className="project-cov"> <BsFillArchiveFill className='project-icon'/> </div>
                            <div className="project-name">
                                <h5>Project Management Tool</h5>
                                <span className="duration">1 week</span>
                            </div>
                            <div className="action">: </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile