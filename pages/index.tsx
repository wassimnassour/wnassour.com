/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { About, Blog, Contact, Hero } from 'components'
import { GetStaticProps } from 'next'
import { IPost } from 'types'
import { NextSeo } from 'next-seo'
import { getFeaturedPosts } from '../lib'
import { SITE_URL } from 'utils'

interface Props {
  featuredPosts: IPost[]
}
export default function Home({ featuredPosts }: Props) {
  return (
    <>
      <NextSeo
        title="Wassim | Home"
        openGraph={{
          title: 'Wassim | Home',
          url: SITE_URL,
        }}
      />
      <div
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <About />
        <Blog Posts={featuredPosts} />
        <Contact />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      featuredPosts,
    },
  }
}
