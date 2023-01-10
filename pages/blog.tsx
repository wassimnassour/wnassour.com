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
        <div className="flex flex-wrap items-start justify-center w-full md:justify-between">
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
    <Link
      href={`/posts/${slug}`}
      className="flex flex-col w-full  mt-10  border h-[500px]  md:h-[460px] justify-between   rounded-md cursor-pointer md:w-[32%]"
    >
      <div className="w-full h-56 md:h-52">
        <div className="w-full h-full overflow-hidden">
          <NextImage
            src={image}
            className="object-cover w-full h-full"
            // sizes="100vw"
            quality={100}
            width={200}
            height={200}
            alt={title}
          />
        </div>
      </div>

      <h1 className="px-2 my-1 text-2xl text-white md:my-5 line-clamp-2">
        {title}
      </h1>
      <p className="px-2 mb-4 text-base text-gray-300 line-clamp-4">
        {excerpt.substring(0, 189)}...
      </p>
      <div className="flex justify-between px-2 text-gray-300">
        <span className="mb-3">{date}</span>
      </div>
    </Link>
  )
}
