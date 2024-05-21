import React from 'react'
import { IPost, LinkProps } from 'types'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Paragraph, H2, Tag, BlockQuote, Li, Link } from 'components'
import cx from 'utils/cx'
import { H1 } from 'components'

import { SITE_URL } from 'constant'
import { Layout, Thumbnail, Title } from './Post'
import DisqusComments from './Disqus'
import { H3 } from './Post/H3'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
  slug: string
}

export const MdxTemplate = ({ source, frontMatter, slug }: Props) => {
  const ogImage = SITE_URL + frontMatter?.coverImage ?? ''
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          title: frontMatter.title,
          url: SITE_URL + slug,
          description: frontMatter.excerpt,
          article: {},
          images: [{ url: ogImage }]
        }}
      />
      <Layout pageTitle={frontMatter.title}>
        <article className="max-w-4xl px-4 mx-auto mt-4 md:px-10 sm:w-11/12 md:w-8/10 ">
          {frontMatter.ogImage && (
            <div className="mb-4">
              <Thumbnail title={frontMatter.title} src={frontMatter.ogImage.url} />
            </div>
          )}
          <div className="my-7">
            <Title>{frontMatter.title}</Title>
            <p className="mt-10 text-gray-200">
              {frontMatter.date} {frontMatter?.author?.name}
            </p>
          </div>

          <MDXRemote
            components={components as unknown as Record<string, React.ReactNode>}
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

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  Img: ({ src, alt, className, ...props }: any) => {
    return (
      <Image
        height={400}
        width={800}
        quality={100}
        src={src}
        alt={alt}
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        priority
        className={cx('w-full object-contain my-7', className)}
        {...props}
      />
    )
  },
  li: Li,
  a: ({ href, children, ...props }: LinkProps) => (
    <a href={href} target="_blank" {...props} rel="noreferrer" className="underline text-secondary">
      {children}
    </a>
  ),
  Link,
  Tag,
  inlineCode: Tag,
  BlockQuote
}
