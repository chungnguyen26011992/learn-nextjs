import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    {/* 
      Use <Component {...pageProps} /> to load children component 
      See 4:00 https://www.youtube.com/watch?v=DGn25s42NvQ&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=5
      */}
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
