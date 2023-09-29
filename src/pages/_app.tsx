import StoreProvider from '@/redux/StoreProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/globalLayout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}
