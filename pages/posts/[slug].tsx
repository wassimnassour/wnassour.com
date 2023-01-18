import React from 'react'
import { LinkProps } from 'types'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import {
  Thumbnail,
  Layout,
  Paragraph,
  H2,
  Title,
  Tag,
  BlockQuote,
  Li,
  Link,
} from 'components'
import cx from 'utils/cx'
import { SITE_URL } from 'utils'
import { H1 } from 'components'
import DisqusComments from 'components/Disqus'
import { IPost } from 'types/post'

import { getPost, getAllPosts, getFeaturedPosts } from '../../lib/mdxUtils'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
  slug: string
}

const components = {
  h1: H1,
  h2: H2,
  p: Paragraph,
  Img: ({ src, alt, className }: any) => {
    return (
      <Image
        alt={alt}
        src={src}
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className={cx('w-full h-auto my-7', className)}
      />
    )
  },
  li: Li,
  a: ({ href, children, ...props }: LinkProps) => (
    <a
      href={href}
      target="_blank"
      {...props}
      rel="noreferrer"
      className="underline text-secondary"
    >
      {children}
    </a>
  ),
  Link,
  Tag,
  BlockQuote,
}

const PostPage: React.FC<Props> = ({ source, frontMatter, slug }: Props) => {
  const ogImage = SITE_URL + frontMatter.ogImage.thumbnail

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          title: frontMatter.title,
          url: SITE_URL + slug,
          description: frontMatter.excerpt,
          article: {},
          images: [{ url: ogImage }],
        }}
      />
      <Layout pageTitle={frontMatter.title}>
        <article className="max-w-4xl px-4 mx-auto mt-4 md:px-10 sm:w-11/12 md:w-8/10 ">
          <div className="mb-4">
            <Thumbnail
              title={frontMatter.title}
              src={frontMatter.ogImage.url}
            />
          </div>

          <div className="my-7">
            <Title>{frontMatter.title}</Title>
            <p className="mt-10 text-gray-200">
              {frontMatter.date} · {frontMatter.author.name}
            </p>
          </div>

          <MDXRemote
            components={
              components as unknown as Record<string, React.ReactNode>
            }
            {...source}
          />
        </article>
        <div className="w-11/12 max-w-4xl mx-auto mt-20 md:8/12">
          <DisqusComments post={frontMatter} slug={slug} />
        </div>
      </Layout>
    </>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string)

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  })
  getFeaturedPosts()
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params?.slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
