import { join } from 'path'
import { getAllContent, getContent, getFilePaths } from './mdxUtils'

type Items = {
  [key: string]: string
}

const Notes_PATH = join(process.cwd(), '_notes')

export const noteUrls = getFilePaths(Notes_PATH)

export function getAllNotes(fields: string[] = []): Items[] {
  return getAllContent(Notes_PATH, fields)
}

export function getNoteContent(slug: string) {
  return getContent(Notes_PATH, slug)
}

export function getFeaturedPosts() {
  const allposts = getAllContent(Notes_PATH, [
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
