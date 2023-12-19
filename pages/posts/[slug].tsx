import React from 'react'
import { IPost } from 'types'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'

import { getPost, getAllPosts, getFeaturedPosts } from '../../lib/blogUtils'
import { MdxTemplate } from 'components/MdxTemplate'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
  slug: string
}

const PostPage: React.FC<Props> = ({ source, frontMatter, slug }: Props) => {
  return <MdxTemplate frontMatter={frontMatter} slug={slug} source={source} />
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string)

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  })
  getFeaturedPosts()
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params?.slug
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}
