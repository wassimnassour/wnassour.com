export interface IPost {
  slug: string
  date: string
  title: string
  description: string
  excerpt: string
  yields: string
  ingredients: string[]
  directions: string[]
  tips: string[]
  ogImage: {
    thumbnail: string
    url: string
  }
  author: {
    name: string
    image: string
  }
}
