/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { About, Blog, Contact, Hero, Meta } from 'components'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getFeaturedPosts } from '../lib'
import { IPost } from '../types/post'

interface Props {
  featuredPosts: IPost[]
}
export default function Home({ featuredPosts }: Props) {
  return (
    <>
      <Meta pageTitle="Home" />

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
