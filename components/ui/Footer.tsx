import React from 'react'
import { FooterLogo, FooterSeparator } from './icons'

export const Footer = () => {
  return (
    <footer className='footer d-flex d-center'>
        <div className="footer__info d-flex d-center">
            <FooterLogo />
            <p className='footer__description'>
                La Mente es Maravillosa is a property of Grupo MContigo<br/> © 2012 – 2022. All rights reserved.<br/>
                Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. 
                Le recomendamos que contacte con su especialista de confianza.
            </p>
        </div>
        <FooterSeparator />
        <ul className="footer__links d-flex">
            <li className='footer__link'>Política de Cookies</li>
            <li className='footer__link'>Política de Privacidad</li>
            <li className='footer__link'>Términos y condiciones de uso</li>
            <li className='footer__link'>Cláusula Informativa de Consentimiento</li>
        </ul>

    </footer>
  )
}
