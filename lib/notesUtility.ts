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

export function getFeaturedNotes() {
  const allNotes = getAllContent(Notes_PATH, [
    'slug',
    'title',
    'featured',
    'date',
    'excerpt',
    'bgColor'
  ])
  const featuredPosts = allNotes.filter(_t => _t.featured)
  return featuredPosts
}
