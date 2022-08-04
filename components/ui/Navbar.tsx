import React, { useContext } from 'react'
import { UiContext } from '../../context/ContextUi';
import { Burger, Logo, Search } from './icons'

export const Navbar = () => {

  const {toggleSidebar, toggleSearch, search}=useContext(UiContext);

  console.log(search);
  
  const handleSearch=()=>{
    if(search === 'animate__fadeInRight') {
      return toggleSearch('animate__fadeOutRight')
    }
    return toggleSearch('animate__fadeInRight')
  }

  return (<>
      <nav className='navbar fadeIn'>
          <ul className='navbar__ul' style={{padding:0, margin:0}}>
              <li className='navbar__li--burger' onClick={()=>toggleSidebar('animate__fadeInLeft')}>
                <Burger width={30} height={30}/>
              </li>
              <li className='navbar__li--logo'>
                <Logo height={80} width={160} />
              </li>
              <li className={`sideMenu__li search__nav d-flex animate__animated ${search}`}  >
                <input type="text" name="" id="" className='sideMenu__search__input'  placeholder='Buscar' />
                <button className='sideMenu__search__button'>
                  <Search color='white' height={25} width={25}/>
                </button>
              </li>
              <li className='navbar__li--search' onClick={()=>handleSearch()}>
                <Search width={40} height={40} p={false}/>
              </li>
          </ul>

      </nav>
      <div style={{height:'100px'}}></div>
      
  </>
  )
}
