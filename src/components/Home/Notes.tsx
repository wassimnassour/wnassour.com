import { NoteCard } from 'components/Note'
import Link from 'next/link'
import { INote } from 'types/notes'

interface Props {
  notes: INote[]
}

export const Notes = ({ notes }: Props) => {
  return (
    <div>
      <div className="flex w-full flex-row items-center  justify-between font-Alegreya_Sans font-extrabold mt-16">
        <div className="flex items-center justify-center">
          <span className="w-8 h-1 mr-2 bg-secondary "></span>
          <h2 className="text-3xl text-white ">Notes</h2>
        </div>

        <Link href="/notes" className="text-white ">
          Read more &gt;
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6 mt-6 ">
        {notes?.map((note) => (
          <NoteCard
            key={note.title}
            date={note.date}
            excerpt={note.excerpt}
            slug={note.slug}
            title={note.title}
            bgColor={note.bgColor}
          />
        ))}
      </div>
    </div>
  )
}
