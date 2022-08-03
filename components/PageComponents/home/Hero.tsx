import { useRouter } from 'next/router'
import React from 'react'
import { Search } from '../../ui/icons'


export const Hero = () => {

  const router = useRouter();

  return (
    <div className='home__hero__img'>
      <button className='btn--pink d-flex' onClick={()=>router.push('/contact')}>
        <Search color='white' width={30}/>
        <span className='btn__span--pink d-flex d-center'>Contactanos</span>
      </button>
    </div>
  )
}
