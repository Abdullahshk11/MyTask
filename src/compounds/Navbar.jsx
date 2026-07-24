import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='flex justify-between my-2'>
                <div className="logo">
                    <span className='font-bold text-xl mx-8'>MyTasks</span>
                </div>
                <ul className='flex gap-8 mx-9'>
                    <li className='cursor-pointer hover:font-bold duration-75'>Home</li>
                    <li className='cursor-pointer hover:font-bold duration-75'>Your Tasks</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar