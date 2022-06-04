import { ColorModeScript, extendTheme } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  // sizes: {
  //   max: 'max-content',
  //   min: 'min-content',
  //   full: '100%',
  //   '3xs': '14rem',
  //   '2xs': '16rem',
  //   xs: '20rem',
  //   sm: '24rem',
  //   md: '28rem',
  //   lg: '32rem',
  //   xl: '36rem',
  //   '2xl': '42rem',
  //   '3xl': '48rem',
  //   '4xl': '56rem',
  //   '5xl': '64rem',
  //   '6xl': '72rem',
  //   '7xl': '80rem',
  //   '8xl': '90rem',
  //   container: {
  //     maxWidth: '100%',
  //     sm: '640px',
  //     md: '768px',
  //     lg: '1024px',
  //     xl: '1280px',
  //   },
  // }
}
const theme = extendTheme({ colors })

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
