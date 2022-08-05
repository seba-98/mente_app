import  Head  from 'next/head'
import React, { FC, useContext, useEffect } from 'react'
import { SidebarMenu } from '../ui';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { UiContext } from '../../context/ContextUi';

interface Props{
  title:string,
  descripcion:string,
  imageUrl?:string,
  children:JSX.Element
}

export const MainLayout:FC<Props> = ({children, title, descripcion, imageUrl}) => {

  const {toggleSearch, toggleSidebar} = useContext(UiContext);
  
  useEffect(() => {
    toggleSidebar('display-none');
    toggleSearch('display-none');
  }, [])
  

  return (
    <>

      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={imageUrl} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className='fadeIn'>
        <SidebarMenu />
        <Navbar />
          {children}
      </main>
      <Footer />
    </>
  )
}
