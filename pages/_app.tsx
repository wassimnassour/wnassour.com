/** @jsxImportSource theme-ui */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from 'ui/theme'
import { Footer, Nav } from 'components'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  const them: any = theme
  return (
    <ThemeProvider theme={them}>
      <div sx={{ bg: '#0e1630fa', minHeight: '90vh' }}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
