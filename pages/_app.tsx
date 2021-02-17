import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/app'
import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
