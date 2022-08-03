import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UiProvider } from '../context/UiProvider';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
  
}

export default MyApp
