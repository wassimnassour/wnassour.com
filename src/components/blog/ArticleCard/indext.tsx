import Link from 'next/link'
import NextImage from 'next/image'

export const ArticleCard = ({
  title,
  date,
  slug,
  excerpt,
  image,
}: {
  title: string
  date: string
  slug: string
  excerpt: string
  image: string
}) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="flex flex-col w-full  mr-3 mt-10  border border-gray-600   md:h-[460px] justify-between   rounded-md cursor-pointer "
    >
      <div className="w-full h-56 md:h-52 ">
        <div className="w-full h-full overflow-hidden rounded-r-md rounded-l-md ">
          <NextImage
            src={image}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            quality={100}
            width={200}
            height={200}
            alt={title}
          />
        </div>
      </div>

      <h1 className="px-2 my-5 text-2xl font-bold   text-white sm:my-1 md:my-5 line-clamp-2">
        {title}
      </h1>
      <p className="px-2 mb-4 text-sm text-gray-300 lg:text-base line-clamp-4 font-light">
        {excerpt.substring(0, 189)}...
      </p>
      <div className="flex justify-between px-2 text-gray-300">
        <span className="mb-3">{date}</span>
      </div>
    </Link>
  )
}
