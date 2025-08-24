import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} =useContext(UserContext);
    if(!user) return <div className='p-5'>Please Login</div>
    return <div className='p-5'>Welcome {user.username}</div>
}

export default Profile;