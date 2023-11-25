import { Blog, Contact, Hero, Notes } from 'components'
import { GetStaticProps } from 'next'
import { IPost } from 'types'
import { NextSeo } from 'next-seo'
import { getFeaturedPosts } from '../lib'
import { SITE_URL } from 'constant'
import { getFeaturedNotes } from '../lib/notesUtility'
import { INote } from 'types/notes'

interface Props {
  featuredPosts: IPost[]
  featuredNotes: INote[]
}
export default function Home({ featuredPosts, featuredNotes }: Props) {
  return (
    <>
      <NextSeo
        title="Wassim | Home"
        openGraph={{
          title: 'Wassim | Home',
          url: SITE_URL,
        }}
      />

      <div>
        <Hero />

        <div className="w-11/12 md:w-9-10 lg:max-w-5xl mx-auto">
          <Notes notes={featuredNotes} />
          <Blog Posts={featuredPosts} />
          <Contact />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts()
  const featuredNotes = getFeaturedNotes()
  return {
    props: {
      featuredPosts,
      featuredNotes,
    },
  }
}
