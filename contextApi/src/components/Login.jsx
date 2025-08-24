import React from 'react';
import { useContext,useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password});
    }

    return (
        <div>
            <h2 className='py-4'>Login</h2>

            <input className='border-2 rounded-md bg-gray-500'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text" placeholder='Username' />
            
            <input className='border-2 m-2 rounded-md bg-gray-500'
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" placeholder='Password' />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;