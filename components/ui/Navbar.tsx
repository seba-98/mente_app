import React, { useContext } from 'react'
import { UiContext } from '../../context/ContextUi';
import { Burger, Logo, Search } from './icons'

export const Navbar = () => {

  const {toggleSidebar, modal}=useContext(UiContext);

  return (
    <nav className='navbar fadeIn'>
        <ul className='navbar__ul' style={{padding:0, margin:0}}>
            <li className='navbar__li--burger' onClick={()=>toggleSidebar('animate__fadeInLeft')}>
              <Burger width={30} height={30}/>
            </li>
            <li className='navbar__li--logo'>
              <Logo height={80} width={160} />
            </li>
            <li className='navbar__li--search'>
              <Search width={30} height={30}/>
            </li>
        </ul>

    </nav>
  )
}
