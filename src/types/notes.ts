import { NoteColors } from 'constant'

export interface INote {
  slug: string
  date: string
  title: string
  description: string
  excerpt: string
  yields: string
  ingredients: string[]
  directions: string[]
  tips: string[]
  author: {
    name: string
    image: string
  }
  bgColor: keyof typeof NoteColors
}
