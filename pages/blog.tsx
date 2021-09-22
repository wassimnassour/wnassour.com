/* eslint-disable @next/next/no-img-element */

/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/mdxUtils'
import { IPost } from '../types/post'
import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
interface Props {
  posts: IPost[]
}

const ArticleCard = ({
  title,
  date,
  slug,
  excerpt,
}: {
  title: string
  date: string
  slug: string
  excerpt: string
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a
        sx={{
          cursor: 'pointer',
          flexGrow: 0,
          flexBasis: ['100%', '100%', '45%'],
          bg: '#49536b',
          px: 3,
          py: 3,
          mx: ['auto', 'auto', 3],
          ml: 0,
          my: [2, 2, 4],
          borderRadius: 3,
        }}
      >
        <img
          sx={{
            display: ['none', 'none', 'block'],
            mx: 'auto',
            mb: [1, 2, 0],
            transform: [
              'translateY(0px)',
              'translateY(0px)',
              'translateY(-25px)',
            ],
            borderRadius: 7,
            width: ['100%'],
            height: [140, 200],
          }}
          src="https://picsum.photos/400/400"
          alt="A photograph of sliced kiwifruit on a while plate"
        />
        <span sx={{ color: 'gainsboro', mb: [0.6, 1, 1] }}>{date}</span>
        <h1 sx={{ fontSize: 22, color: 'white' }}>{title}</h1>
        <p sx={{ mb: 3, fontSize: [14, 14, 16], color: 'whitesmoke' }}>
          {excerpt}
        </p>
        <span
          sx={{ color: 'white', mb: 1, fontWeight: 700, cursor: 'pointer' }}
        >
          Read More
        </span>
      </a>
    </Link>
  )
}

const Blog = ({ posts }: Props) => {
  return (
    <>
      <NextSeo
        title="Wassim | Blog"
        openGraph={{
          title: 'Wassim | Blog',
          url: 'https://wnassour.vercel.app/blog',
        }}
      />
      <div sx={{ width: ['90%', '95%', '94%', '960px'], mx: 'auto' }}>
        <h1 sx={{ color: 'white', ml: [1], fontSize: 50 }}>Blog</h1>
        <div
          sx={{
            display: ['flex'],
            flexWrap: ['wrap'],
            alignItems: 'center',
            justifyContent: ['center', 'center', 'flex-start'],
            mx: 'auto',
            width: '100%',
          }}
        >
          {posts.map((post) => (
            <ArticleCard
              key={post.title + post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
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
  ])
  return {
    props: {
      posts,
    },
  }
}
