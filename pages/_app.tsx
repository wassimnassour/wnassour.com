/** @jsxImportSource theme-ui */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from 'ui/theme'
import { Footer, Nav } from 'components'
import { DefaultSeo } from 'next-seo'
import { SITE_URL } from 'utils'

function MyApp({ Component, pageProps }: AppProps) {
  const them: any = theme
  return (
    <ThemeProvider theme={them}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: SITE_URL,
          site_name: 'Wassim',
          description:
            "Hi 👋 I'm Wassim Nassour, self-taught  developer , I work now as a mobile engineer, also have interested in the web technologies b,& tech in general",
        }}
        twitter={{
          handle: '@wassimanssour',
          cardType: 'summary_large_image',
        }}
      />
      <div sx={{ bg: '#0e1630fa', minHeight: '90vh' }}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
export default MyApp
