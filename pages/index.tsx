import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts'
import { Crianza, Desiciones, Hero, Salud } from '../components/PageComponents/home'
import { Carousel } from '../components/ui'
import { Publicidad } from '../components/ui/icons'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home - La mente es maravillosa' descripcion='Bienvenidos a La mente es maravillosa'>
      <>
        <header className='home__hero d-flex d-center '>
          <Hero/>
        </header>

        <section className='salud section--margin d-flex d-center'>
          <Salud/>
        </section>

        <section className='crianza section--margin d-flex d-center'>
          <Crianza />
        </section>

        <section className='testimonios d-flex d-center'>
          <Carousel />
        </section>

        <section className='decisiones d-flex d-center section--margin'>
          <Desiciones />
        </section>

        <aside className='publicidad__content d-flex d-center'>
          <Publicidad />
        </aside>
      </>
    </MainLayout>
  )
}

export default Home
