import React from 'react'
import { SaludLogo, News, Email, Check, ChatBox } from '../../ui/icons'

export const Salud = () => {
  return (
    <>
        <SaludLogo/>
        <div className="salud__container d-flex">
        <div className='salud__new d-flex d-center'>
            <News />
        </div>
        <div className='salud__info d-flex d-center'>
            <h3 className='salud__h3'>Comunicación</h3>
            <p className='salud__description'>Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?</p>
            <div className='salud__icons d-flex '>
            <Email width={40} />
            <Check width={40} />
            <ChatBox width={40} />
            </div>
        </div>
        </div>
    
    </>
  )
}
