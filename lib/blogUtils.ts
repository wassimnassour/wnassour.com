import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { getAllContent, getContent, getFilePaths } from './mdxUtils'

type Items = {
  [key: string]: string
}

type Post = {
  data: {
    [key: string]: string
  }
  content: string
}

const POSTS_PATH = join(process.cwd(), '_posts')

function getPostFilePaths(): string[] {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  )
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { data, content }
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '')
  const { data, content } = getPost(slug)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const postsUrls = getFilePaths(POSTS_PATH)

export function getAllPosts(fields: string[] = []): Items[] {
  return getAllContent(POSTS_PATH, fields)
}

export function getPostContent(slug: string) {
  return getContent(POSTS_PATH, slug)
}

export function getFeaturedPosts() {
  const allposts = getAllContent(POSTS_PATH, [
    'slug',
    'image',
    'title',
    'featured',
    'date',
    'excerpt',
    'content',
  ])
  const featuredPosts = allposts.filter((_t) => _t.featured)
  return featuredPosts
}
