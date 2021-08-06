// components/Meta.tsx
import Head from 'next/head'
import { useRouter } from 'next/router'

import { SITE_URL, SITE_NAME, TWITTER_USERNAME } from '../../../utils/constants'

type Props = {
  pageTitle?: string
  description?: string | undefined
}

const meta = {
  description: `${SITE_NAME} `,
  ogImagePath: '/assets/WN.png',
}

export const Meta: React.FC<Props> = ({ pageTitle, description }: Props) => {
  const router = useRouter()
  const ogUrl = SITE_URL + router.asPath
  const ogType = router.pathname === '/' ? 'website' : 'article'
  const ogTitle = pageTitle ? pageTitle : 'Wassim | Home'
  const ogImage = SITE_URL + meta.ogImagePath
  const ogDescription = description
    ? description
    : 'Hi my name is wassim ,im front-end developer '

  return (
    <Head>
      <title>{pageTitle}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={ogDescription} key="description" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content={ogDescription}
        key="ogDescription"
      />
      <meta property="og:image" content={ogImage} key="ogImage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_USERNAME} />
    </Head>
  )
}