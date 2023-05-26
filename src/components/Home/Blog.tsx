import Link from 'next/link'
import { IPost } from 'types'

interface Props {
  Posts: IPost[]
}

export const Blog = ({ Posts }: Props) => {
  return (
    <div className="flex items-center justify-center my-4 mt-16">
      <div className="w-11/12 md:w-9-10 lg:max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span className="w-8 h-1 mr-2 bg-secondary "></span>
            <h2 className="text-3xl text-white ">Blog</h2>
          </div>

          <Link href="/blog" className="text-white ">
            Read more &gt;
          </Link>
        </div>
        <div className="grid grid-col-1 md:grid-cols-3  mt-6 ">
          {Posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
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
      <div className="flex flex-col justify-between bg-[#49536b] rounded-sm p-3 mr md:mr-3 ">
        <h1 className="my-4 text-2xl text-white">{post.title}</h1>
        <p className="text-gray-200">{post.excerpt.substring(1, 260)}...</p>
        <div className="flex justify-between mt-5 text-gray-200">
          <span className="my-1 ">{post.date}</span>
          {/* <span>{readingTime(post.content).text}</span> */}
        </div>
      </div>
    </Link>
  )
}
