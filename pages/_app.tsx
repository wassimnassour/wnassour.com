import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Nav } from 'components'
import { DefaultSeo } from 'next-seo'
import { SITE_URL } from 'constant'
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: SITE_URL,
          site_name: 'Wassim',
          description:
            "Hi 👋 I'm Wassim Nassour, self-taught  developer , I work now as a mobile engineer, also have interested in the web technologies b,& tech in general"
        }}
        twitter={{
          handle: '@wassimanssour',
          cardType: 'summary_large_image'
        }}
      />
      <div className="min-h-screen bg-re">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
export default MyApp
