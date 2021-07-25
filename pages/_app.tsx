/** @jsxImportSource theme-ui */

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../ui/theme'
import { Footer, Nav } from 'components'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ bg: '#0e1630fa', minHeight: '90vh' }}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
