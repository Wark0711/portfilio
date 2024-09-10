import React, { useState } from 'react'
import NavItems from '../components/NavItems'

function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Rahul</a>
                    <button onClick={() => setOpen(open => !open)} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                        <img src={open ? `assets/close.svg` : `assets/menu.svg`} className='w-6 h-6' alt='toggle' />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <NavItems />
            </div>
        </header>
    )
}

export default Navbar