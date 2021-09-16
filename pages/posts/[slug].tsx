/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import readingTime from 'reading-time'
import { Thumbnail, Layout, Paragraph, CodeBlock } from 'components'
import { IPost } from '../../types/post'
import { SITE_URL } from 'utils'
import { getPost, getAllPosts, getFeaturedPosts } from '../../lib/mdxUtils'
import Title from 'components/Post/Title'
import React from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
}

const components = {
  Title: Title,
  Paragraph: Paragraph,
  CodeBlock: CodeBlock,
}
const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const ogImage = SITE_URL + frontMatter.thumbnail

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          title: frontMatter.title,
          url: 'https://wnassour.vercel.app/blog',
          description: frontMatter.excerpt,
        }}
      />
      <Layout pageTitle={frontMatter.title}>
        <article className="prose prose-green">
          <div className="mb-4">
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>

          <Title>{frontMatter.title}</Title>

          <p className="font-bold" sx={{ color: 'GrayText' }}>
            {frontMatter.date} ·{' '}
            {readingTime(source.toString()).minutes > 1
              ? readingTime(source.toString()).minutes
              : 1 + 'min'}{' '}
            · {frontMatter.author.name}
          </p>

          <MDXRemote {...source} components={components} />
        </article>
      </Layout>
    </>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string)

  const mdxSource = await serialize(content, { scope: data })
  getFeaturedPosts()
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
