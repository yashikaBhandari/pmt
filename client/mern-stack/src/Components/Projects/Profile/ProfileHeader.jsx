import React from "react";
import './Profile.css'
import {BsPencil} from 'react-icons/bs'
const ProfileHeader = () => {
    return(
        <div className="profile-header">
            <h2 className="header-title">Profile </h2>
            <div className="edit">
                <BsPencil/>
            </div>
        </div>
    )
}

export default ProfileHeader