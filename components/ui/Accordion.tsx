import React, { useState } from 'react'
import { Bienestar } from './icons/Bienestar';

export const Accordion = () => {

    const [items, setItems] = useState(['¿Cuales son los pasos para tomar una desición?', '¿Como decidir?', '¿Quienes son nuestros profesionales?'])
    const [active, setActive] = useState<string | null>(null);
    

    const onClick=(item:string, act:string | null)=>{
        if(item === act) return setActive(null);
         return setActive(item);
    }
    console.log(active);
    
  return (
    <div className="accordion">
        {
            items.map((a)=>(
                
                <div 
                className="accordion__container" 
                key={a} 
                data-aos="flip-down"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                > 
                    <div className="accordion__label" onClick={()=> onClick(a, active) }>
                    {a}
                    <span className='accordion__label__span d-flex d-center'>{a === active ? '▼' : '►'}</span>
                    </div>
                    <div className={`accordion__container__content d-flex ${active === a && 'active-faq'}`}>
                        <ol className='accordion__ol'>
                            <li>Contactanos</li>
                            <li>Cuentanos sobre tí</li>
                            <li>Te ayudamos</li>
                        </ol>
                        <Bienestar />
                    </div>
                </div>
                
            ))
        }
        
    </div>
  )
}
