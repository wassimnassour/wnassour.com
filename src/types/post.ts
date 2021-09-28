export interface IPost {
  slug: string
  date: string
  thumbnail: string
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
}
