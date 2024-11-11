import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* <div className='bg-gray-900 text-white'> */}
            <div className='bg-slate-900 text-white'>
                <div className='max-w-[900px] mx-auto py-4'>
                    <div className='flex justify-between items-center'>
                    <header className='flex gap-7 items-center'>
                            <NavLink to={"/"} className="font-bold text-xl">
                                Home
                            </NavLink>
                            {/* <NavLink to={"/paste"} className="font-bold text-xl">
                                Paste
                            </NavLink> */}
                        </header>
                        <div className='flex gap-4'>
                            <h1 className='px-3 pt-1 text-teal-500 font-bold me-4'>You Note Saver</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar