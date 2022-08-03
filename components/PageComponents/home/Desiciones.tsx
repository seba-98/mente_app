import React from 'react'
import { Accordion } from '../../ui'
import { Support, Search } from '../../ui/icons'

export const Desiciones = () => {
  return (
    <>
        <div className="decisiones__info d-flex d-center">
            <Support />
            <div className="desiciones__contacto">
                <p className='desiciones--text'>
                    ¿Cómo podemos diseñar una educación que tenga como resultado niños más responsables? En este artículo compartimos algunas
                    estrategias que aumentan la probabilidad de éxito para este objetivo.
                </p>

                <button className='btn--pink d-flex '>
                    <Search color='white' width={30} />
                    <span className='btn__span--pink d-flex d-center'>Contactanos</span>
                </button>
            </div>
        </div>
        <Accordion />
    
    </>
  )
}
