import React from 'react'
import { navLinks } from '../utils'

function NavItems() {
    return (
        <>
            <ul className='nav-ul'>
                {
                    navLinks?.map(({id, href, name}) => (
                        <li key={id} className='nav-li'>
                            <a href={href} className='nav-li_a' onClick={() => {}}>{name}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default NavItems