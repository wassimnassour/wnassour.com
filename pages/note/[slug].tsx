import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import { IPost } from 'types/post'

import { getAllNotes, getNoteContent } from '../../lib/notesUtility'
import { MdxTemplate } from 'components/MdxTemplate'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
  slug: string
}

const NotePage: React.FC<Props> = ({ source, frontMatter, slug }: Props) => {
  return <MdxTemplate frontMatter={frontMatter} slug={slug} source={source} />
}

export default NotePage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getNoteContent(params?.slug as string)

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params?.slug
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllNotes(['slug'])
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
