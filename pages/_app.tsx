import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Nav } from 'components'
import { DefaultSeo } from 'next-seo'
import { SITE_URL } from 'constant'
import Script from 'next/script'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageview = (url: any) => {
    const windou2: any = window
    windou2.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/*  */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

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
      <div className="min-h-screen bg-re">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
export default MyApp
