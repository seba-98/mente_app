import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { UiContext } from '../../../context/ContextUi'
import { Search } from '../../ui/icons'


export const Hero = () => {

  const {toggleSearch, toggleSidebar} = useContext(UiContext);

  const router = useRouter();

  const navigate=()=>{
    toggleSidebar('display-none');
    toggleSearch('display-none');
    router.push('/contact')
  }

  return (
    <div className='home__hero__img'>
      <button className='btn--pink d-flex' onClick={navigate}>
        <Search color='white' width={30}/>
        <span className='btn__span--pink d-flex d-center'>Contactanos</span>
      </button>
    </div>
  )
}
