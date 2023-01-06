import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/mdxUtils'
import { IPost } from 'types'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'
import { SITE_URL } from 'utils'

interface Props {
  posts: IPost[]
}

const ArticleCard = ({
  title,
  date,
  slug,
  excerpt,
  image,
}: {
  title: string
  date: string
  slug: string
  excerpt: string
  image: string
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      {/* <a
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          cursor: 'pointer',
          flexGrow: 0,
          flexBasis: ['100%', '100%', '31%', '30%'],
          px: 2,
          mx: ['auto', 'auto', 1],
          bg: ['#49536b', '#49536b', 'transparent'],
          ml: 0,
          my: [2, 2, 5],
          borderRadius: 3,
        }}
      > */}
      <div
        sx={{
          width: '100%',
          position: 'relative',
          display: ['none', 'none', 'block'],
          mx: 'auto',
          mb: [1, 2, 0],
          borderRadius: 7,
          height: [140, 200],
        }}
      >
        <NextImage src={image} layout="fill" objectFit="cover" alt={title} />
      </div>

      <h1 sx={{ fontSize: 22, m: 0, mt: 2, color: 'white' }}>{title}</h1>
      <p sx={{ mb: 3, fontSize: [14, 14, 16], color: 'whitesmoke' }}>
        {excerpt.substring(1, 189)}...
      </p>
      <div
        sx={{
          color: 'gainsboro',
        }}
      >
        <span sx={{ mb: 1 }}>{date}</span>
      </div>
      {/* </a> */}
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
          url: `${SITE_URL}/blog`,
        }}
      />
      <div
        sx={{
          width: ['90%', '95%', '94%', '90%'],
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <h1 sx={{ color: 'white', ml: [1], fontSize: 50 }}>Blog</h1>
        <div
          sx={{
            display: ['flex'],
            flexWrap: ['wrap'],
            alignItems: ['center', 'flex-start'],
            justifyContent: ['center', 'center', 'space-between'],
            mx: 'auto',
            width: '100%',
          }}
        >
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
