import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Items = {
  [key: string]: string
}

type Post = {
  data: {
    [key: string]: string
  }
  content: string
}

export function getFilePaths(directoryFileName: string): string[] {
  return (
    fs
      .readdirSync(directoryFileName)
      // Only include md(x) files
      .filter(path => /\.mdx?$/.test(path))
  )
}

export function getContent(directoryFile: string, slug: string): Post {
  const fullPath = join(directoryFile, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { data, content }
}

export function getContentItems({
  directoryName,
  fields = [],
  filePath
}: {
  directoryName: string
  filePath: string
  fields: string[]
}): Items {
  const slug = filePath.replace(/\.mdx?$/, '')
  const { data, content } = getContent(directoryName, slug)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
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

export function getAllContent(directoryFileName: string, fields: string[] = []): Items[] {
  const filePaths = getFilePaths(directoryFileName)
  const posts = filePaths
    .map(filePath => getContentItems({ directoryName: directoryFileName, filePath, fields }))
    // sort posts by date in descending order
    .sort((a, b) => {
      const aa = a.date?.split('/').reverse().join(),
        bb = b.date?.split('/').reverse().join()
      return aa < bb ? 1 : aa > bb ? -1 : 0
    })
  return posts
}

export function getFeaturedContent(directoryFileName: string) {
  const all = getAllContent(directoryFileName, [
    'slug',
    'image',
    'title',
    'featured',
    'date',
    'excerpt',
    'content'
  ])
  const featuredContent = all.filter(_t => _t.featured)
  return featuredContent
}
