import { MDXProvider } from '@mdx-js/react'
import AppProvider from '@/lib/context'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </AppProvider>
  )
}

export default App
