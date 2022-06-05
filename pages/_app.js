import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
