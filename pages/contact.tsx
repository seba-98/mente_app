import { NextPage } from 'next';
import React from 'react'
import { MainLayout } from '../components/layouts/MainLayout';
import { Hero } from '../components/PageComponents/contact';

const Contact:NextPage = () => {
  return (
    <MainLayout title='Contacto' descripcion='Contacto con nosotros'>
        <>
        <header className='contact__hero d-flex d-center '>
          <Hero/>
        </header>

        <form className="contact__from d-flex d-center">
            <h3 className='contact__label d-flex d-center'>¡Hola! Contactanos a traves de el formulario. </h3>
            <input type="text" name="name" placeholder='Nombre y apellido'  className='contact__input'/>
            <input type="email" name="email" placeholder='Correo electrónico' className='contact__input'/>
            <h3 className='contact__label d-flex d-center'>¡Cuentanos mas acerca de ti! </h3>
            <textarea name="info" className='contact_text__area'></textarea>
            <div className="btn--send d-flex">
                <button className='btn--purple d-flex'>
                    <span className='btn__span--purple d-flex d-center'>Enviar !</span>
                </button>
            </div>
        </form>
        </>
    </MainLayout>
  )
}

export default Contact