import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { IPost } from 'types'
import { SITE_URL } from 'constant'
import { NoteCard } from 'components/Note'
import { getAllNotes } from '../lib/notesUtility'
import { INote } from 'types/notes'

interface Props {
  notes: INote[]
}

const Notes = ({ notes }: Props) => {
  return (
    <>
      <NextSeo
        title="Wassim | Notes"
        openGraph={{
          title: 'Wassim | Notes',
          url: `${SITE_URL}/Notes`
        }}
      />
      <div className="w-11/12 max-w-6xl min-h-screen pb-4 mx-auto mt-16 md:w-10/12">
        <div className="mb-8">
          <h1 className="my-5 mb-8 text-5xl text-white">Notes</h1>
          <p className="text-white">
            Welcome to my Learning Corner, a space dedicated to sharing the notes I&apos;ve gathered
            from my readings and tutorial explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 w-full ">
          {notes.map(note => {
            return (
              <NoteCard
                key={note.title + note.slug}
                title={note.title}
                excerpt={note.excerpt}
                date={note.date}
                slug={note.slug}
                bgColor={note.bgColor}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Notes

export const getStaticProps: GetStaticProps = async () => {
  const notes = getAllNotes(['slug', 'title', 'featured', 'date', 'excerpt', 'bgColor'])
  return {
    props: {
      notes
    }
  }
}
