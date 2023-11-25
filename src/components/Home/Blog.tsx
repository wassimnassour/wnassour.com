import Link from 'next/link'
import { IPost } from 'types'

interface Props {
  Posts: IPost[]
}

export const Blog = ({ Posts }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 mt-16">
      <div className="flex items-center w-full justify-between font-Alegreya_Sans font-extrabold">
        <div className="flex items-center justify-center">
          <span className="w-8 h-1 mr-2 bg-secondary "></span>
          <h2 className="text-3xl text-white ">Blog</h2>
        </div>

        <Link href="/blog" className="text-white ">
          Read more &gt;
        </Link>
      </div>
      <div className="grid grid-col-1   mt-6 ">
        {Posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

const ArticleCard = ({ post }: { post: IPost }) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex w-full mt-6 cursor-pointer  "
      passHref
    >
      <div className="flex flex-col justify-between bg-[#2c3345]  p-3 mr md:mr-3 rounded-md ">
        <h1 className="my-4 text-2xl font-Alegreya_Sans md:text-3xl text-white">
          {post.title}
        </h1>
        <p className="text-gray-200">{post.excerpt.substring(1, 260)}...</p>
        <div className="flex justify-between mt-5 text-gray-200">
          <span className="my-1 ">{post.date}</span>
          {/* <span>{readingTime(post.content).text}</span> */}
        </div>
      </div>
    </Link>
  )
}
