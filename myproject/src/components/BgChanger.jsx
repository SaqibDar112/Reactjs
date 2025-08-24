import React from 'react'
import { useState } from 'react';
function BgChanger() {
    const [color, setColor] = useState("olive");

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className='fixed flex flex-col items-center bottom-12 inset-x-0 px-2 '>
            <p className='mb-4 text-lg font-bold text-black drop-shadow'>Press the button to change Background color</p>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
                   <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white bg-green-900 shadow-lg'>Green</button>
                   <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black bg-yellow-300 shadow-lg">Yellow</button>
                   <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900'>Red</button>
                   <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-cyan-400'>Cyan</button>
                </div>
            </div>
        </div>
    )
}

export default BgChanger;