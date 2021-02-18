import AppProvider from '@/lib/context'
import { AppProps } from 'next/app'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
