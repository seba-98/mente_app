import { NextPage } from 'next';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MainLayout } from '../components/layouts/MainLayout';
import { Hero } from '../components/PageComponents/contact';
import { NewsLetter } from '../components/ui/icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FullScreenLoading } from '../components/ui/FullScreenLoading';

interface IInputErr{
  nameErr:string,
  emailErr:string,
  messageErr:string
}

const Contact:NextPage = () => {

  const [loaded, setLoaded] = useState(false)

  const initialFormErrorState:string[]=[];
  const initialFormState={ name:'', email:'', message:'',}
  const [formValues, setFormValues] = useState( initialFormState );
  
  const initialInputErrors:IInputErr={nameErr:'', emailErr:'', messageErr:''};
  const [formErrors, setFormErrors] = useState<string[]>( initialFormErrorState );
  const [inputErr, setInputErr] = useState<IInputErr>(initialInputErrors);
  const {nameErr, emailErr, messageErr}=inputErr



  const {name, email, message}=formValues;
  const setValues=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    let errors= initialFormErrorState;

    if(name.length < 2) {
      const err='El campo nombre y apellido debe tener mas de 2 caracteres';
      setInputErr({...inputErr, nameErr:err})
      errors.push(err);
    }
    if(!email.includes('@') || email.length < 8){
      const err='Ingrese un correo válido'
      setInputErr({...inputErr, emailErr:err})
      errors.push(err);
    } 
    if(message.length < 15){
      const err='¡Por favor cuentenos mas sobre usted!'
      setInputErr({...inputErr, messageErr:err})
      errors.push(err);
    } 
    if(errors.length >= 1) {
      setFormErrors(errors)
    };

    if(errors.length === 0){
      type Data = {
        message: string,
        status:boolean
      }
        setFormErrors( [] );
        setInputErr( initialInputErrors )
        fetch('/api/hello').then(r=> r.json())
        .then((r:Data)=> sendMessage(r.status, r.message) )
        .catch(c=>sendMessage(c.status, c.message))
        
       return setFormValues(initialFormState)
    };
    
  }


  const sendMessage=(status:boolean, message:string)=>{
    if(status) return  toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })

      return toast.error('Error al enviar mensaje :(', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
   
  }


  useEffect(() => {
    const loadPage=()=>{
      setTimeout(()=>{
        setLoaded(true)
      },1200)
    }
    loadPage()
    
  }, [setLoaded])
  

  if(!loaded)return(
    <FullScreenLoading />
  )


  return (
    <MainLayout title='Contacto' descripcion='Contacto con nosotros'>
        <>
        <header className='contact__hero d-flex d-center '>
          <Hero/>
        </header>

        <form 
        className="contact__form d-flex d-center" 
        onSubmit={onSubmit} 
        autoComplete='off'
        noValidate
        >
            <h1 className='contact__label d-flex d-center'>¡Hola! Contactanos a traves de el formulario. </h1>
            <input
             type="text"
             name="name"
             onFocus={()=>{setInputErr({...inputErr, nameErr:''})}}
             placeholder='Nombre y apellido'  
             className={`contact__input ${nameErr  && 'input--err'}`} 
             value={name}
             onChange={setValues}
             />
             {nameErr  !=='' && <span className='chip--err'>{nameErr}</span>}
            <input
             type="email" 
             name="email" 
             onFocus={()=>{setInputErr({...inputErr, emailErr:''})}}
             placeholder='Correo electrónico' 
             className={`contact__input ${emailErr && 'input--err'}`} 
             value={email}
             onChange={setValues}
             />
             {emailErr  !=='' && <span className='chip--err'>{emailErr}</span>}

            <h3 className='contact__label d-flex d-center'>¡Cuentanos mas acerca de ti! </h3>
            <textarea 
            name="message" 
            onFocus={()=>{setInputErr({...inputErr, messageErr:''})}}
            value={message}
            onChange={setValues}
            className={`contact__text__area ${messageErr && 'input--err'}`}  />
            {messageErr  !=='' && <span className='chip--err'>{messageErr}</span>}
             
            <div className="btn--send d-flex">
                <button className='btn--purple d-flex' type='submit'>
                    <span className='btn__span--purple d-flex d-center'>Enviar !</span>
                </button>
            </div>
        </form>

        <section className='newsletter__container d-flex'>
          <NewsLetter />
          <div className='news__info'>
              <h3 className='news__title1'>Title1</h3>
              <p className='news__title2'>Title2</p>
            <div className='news__register d-flex'>
              <input type="text" className='input__news' />
              <button className='button--grey btn__news'>Suscribirse</button>
            </div>
          </div>
        </section>
        <ToastContainer />
        </>
    </MainLayout>
  )
}

export default Contact