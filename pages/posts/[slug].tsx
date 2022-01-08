/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import readingTime from 'reading-time'
import NextImage from 'next/image'
import {
  Thumbnail,
  Layout,
  Paragraph,
  CodeBlock,
  H2,
  Title,
  Tag,
  BlockQuote,
} from 'components'
import { IPost } from '../../src/types/post'
import { SITE_URL } from 'utils'
import { getPost, getAllPosts, getFeaturedPosts } from '../../lib/mdxUtils'
import { H1 } from 'components'
import React from 'react'
import { NextSeo } from 'next-seo'
import DisqusComments from 'components/Disqus'
import { MdxComponent } from 'types'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
  slug: string
}

const components = {
  h1: ({ styles, children }: MdxComponent) => {
    return <H1 styles={styles}>{children}</H1>
  },
  h2: ({ styles, children }: MdxComponent) => {
    return <H2 styles={styles}>{children}</H2>
  },
  p: ({ styles, children }: MdxComponent) => {
    return <Paragraph styles={styles}>{children}</Paragraph>
  },
  Img: ({ src, height = 40, width = '100%', objectFit = 'fill' }: any) => {
    return (
      <NextImage
        layout="responsive"
        src={src}
        height={height}
        width={width}
        objectFit={objectFit}
        placeholder="blur"
        blurDataURL={src}
      />
    )
  },
  Tag: ({ children, styles }: MdxComponent) => <Tag>{children}</Tag>,
  BlockQuote: ({ children, styles }: MdxComponent) => (
    <BlockQuote>{children}</BlockQuote>
  ),
  CodeBlock: CodeBlock,
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
        <article sx={{ mt: [2, 4] }}>
          <div className="mb-4">
            <Thumbnail
              title={frontMatter.title}
              src={frontMatter.ogImage.url}
            />
          </div>

          <div sx={{ mb: 4, mt: [3, 5] }}>
            <Title>{frontMatter.title}</Title>
            <p sx={{ color: 'GrayText', m: 0 }}>
              {frontMatter.date} ·{' '}
              {readingTime(source.toString()).minutes > 1
                ? readingTime(source.toString()).minutes
                : 1 + 'min'}{' '}
              · {frontMatter.author.name}
            </p>
          </div>

          <MDXRemote {...source} components={components} />
        </article>
        <DisqusComments post={frontMatter} slug={slug} />
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
