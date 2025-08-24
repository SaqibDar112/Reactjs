// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/SaqibDar112")
    //     .then((res)=> res.json())
    //     .then(data => setData(data));
    // },[]);
    
    
    
  return (
    <div className='text-center m-4 bg-gray-700 text-white'>
        {data.name}
        <img className = "block mx-auto rounded-full shadow-lg" src={data.avatar_url} alt="img"  width={200}/>
    </div>

  )
}

export default Github;


export const GithubInfoLoader =async ()=>{
    const res = await fetch("https://api.github.com/users/SaqibDar112")
    return res.json();
}