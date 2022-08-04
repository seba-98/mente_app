import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { UiContext } from '../../context/ContextUi'
import { Cross, RightArrow, Search } from './icons';

export const SidebarMenu = () => {

  const {modal, toggleSidebar}=useContext(UiContext);

  const router = useRouter();

  const setRedirect=()=>{
    if(router.pathname === '/contact')return router.push('/');
    return router.push('/contact');
  }
  

  return (
    <aside className={`sideMenu animate__animated ${modal}`} >

      <ul className='sideMenu__ul' style={{margin:0, padding:0}}>

        <li className='sideMenu__li sideMenu__cross d-flex' onClick={()=> toggleSidebar('animate__fadeOutLeft')}>
          <div className='cross__content d-flex d-center'>
            <Cross width={20}/>
          </div>
        </li>

        <li className='sideMenu__li hover__animation--underline sideMenu__search d-flex '>
          <input type="text" name="" id="" className='sideMenu__search__input' placeholder='Buscar' />
          <button className='sideMenu__search__button'>
            <Search color='white' height={25} width={25}/>
          </button>
        </li>

        <li className='sideMenu__li sideMenu__link hover__animation--underline d-flex' onClick={setRedirect}>
          <span>{router.pathname === '/contact' ? 'Home' : 'Contacto' } </span> <RightArrow height={30} width={30}/>
        </li>
        
        <li className='sideMenu__li sideMenu__embarazo d-flex d-center'>
          <h3 className='h3--purple border--divider'>Embarazo</h3>
          <ul className='sideMenu__ul' style={{margin:0, padding:0}}>
            <li className='sideMenu__li hover__animation--underline sideMenu__link d-flex '>
              <span>Voy a ser mamá</span> <RightArrow height={30} width={30}/>
            </li>
            <li className='sideMenu__li hover__animation--underline sideMenu__link d-flex '>
              <span>Parto</span> <RightArrow height={30} width={30}/>
            </li>
          </ul>
        </li>

        <li className='sideMenu__li sideMenu__embarazo d-flex d-center'>
          <h3 className='h3--purple border--divider'>Educación</h3>

          <ul className='sideMenu__ul' style={{margin:0, padding:0}}>
            <li className='sideMenu__li hover__animation--underline sideMenu__link d-flex '>
              <span>Aprender a ser mamá</span> <RightArrow height={30} width={30}/>
            </li>
            <li className='sideMenu__li hover__animation--underline sideMenu__link d-flex '>
              <span>Educación para bebés</span> <RightArrow height={30} width={30}/>
            </li>
            <li className='sideMenu__li hover__animation--underline sideMenu__link d-flex '>
              <span>Educación para niños</span> <RightArrow height={30} width={30}/>
            </li>
          </ul>
        </li>

      </ul>
    </aside>
  )
}
