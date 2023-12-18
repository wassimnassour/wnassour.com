import Link from 'next/link'
import NextImage from 'next/image'
import { FC } from 'react'
import cx from 'utils/cx'
import { NoteColors } from 'constant'

interface Props {
  title: string
  date: string
  slug: string
  excerpt: string
  bgColor?: keyof typeof NoteColors
}

export const NoteCard: FC<Props> = ({ bgColor, title, date, slug, excerpt }) => {
  return (
    <Link
      href={`/note/${slug}`}
      className={cx(
        'flex flex-col w-full  mr-3 mt-10  border border-gray-600  text-[#2F1931]  p-5 md:p-7   justify-between   rounded-2xl cursor-pointer '
      )}
      style={{ backgroundColor: NoteColors[bgColor || 'blue'] }}
    >
      <h1 className=" text-2xl block font-semibold    line-clamp-2">{title}</h1>
      <hr className="h-1  my-4 w-full border-[#2F1931]  " />
      <p className="px-2 mb-4 text-sm  line-clamp-4 font-light">{excerpt.substring(0, 100)}...</p>
      <div className="flex justify-between px-2 mt-5   ">
        <span className="mb-3">{date}</span>
      </div>
    </Link>
  )
}
