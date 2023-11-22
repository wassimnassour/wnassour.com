import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/blogUtils'
import { IPost } from 'types'
import { NextSeo } from 'next-seo'
import { SITE_URL } from 'constant'
import { ArticleCard } from 'components/blog/ArticleCard/indext'

interface Props {
  posts: IPost[]
}

const Blog = ({ posts }: Props) => {
  return (
    <>
      <NextSeo
        title="Wassim | Blog"
        openGraph={{
          title: 'Wassim | Blog',
          url: `${SITE_URL}/blog`,
        }}
      />
      <div className="w-11/12 max-w-6xl min-h-screen pb-4 mx-auto mt-16 md:w-10/12">
        <h1 className="my-5 mb-16 text-5xl text-white">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 w-full ">
          {posts.map((post) => {
            return (
              <ArticleCard
                image={post.coverImage}
                key={post.title + post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'image',
    'title',
    'featured',
    'date',
    'excerpt',
    'coverImage',
  ])
  return {
    props: {
      posts,
    },
  }
}
