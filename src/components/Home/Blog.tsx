/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { jsx } from 'theme-ui'
import { IPost } from '../../../types/post'
import Image from 'next/image'
interface Props {
  Posts: IPost[]
}

export const Blog = ({ Posts }: Props) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 3,
        mt: 4,
      }}
    >
      <div sx={{ width: ['90%', '90%', 800, '75%'], maxWidth: 1100 }}>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <span
            sx={{
              display: 'inline-block',
              bg: 'secondary',
              height: 2,
              width: 30,
              mr: 3,
            }}
          ></span>
          <h2 sx={{ color: 'white', fontSize: 32 }}>Blog</h2>
        </div>
        <div
          sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}
        >
          {Posts.map((post) => (
            <div
              key={post.title}
              sx={{
                flex: [1, 1 / 2, 1 / 3],
                mr: [0, 0, 3, 4],
                my: [1, 1, 0],
                p: 3,
                borderRadius: 7,
                bg: '#49536b',
              }}
            >
              <span sx={{ color: 'gainsboro', m: 1 }}>{post.date}</span>
              <h1 sx={{ fontSize: 22, color: 'white' }}>{post.title}</h1>
              <p sx={{ fontSize: 16, color: 'whitesmoke' }}>{post.excerpt}</p>
              <Link href={`/posts/${post.slug}`}>
                <a sx={{ color: 'white', fontWeight: 700, cursor: 'pointer' }}>
                  Read More
                </a>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/blog">
          <a
            sx={{
              color: 'whitesmoke',
              my: 3,
              display: 'block',
              textDecoration: 'underline',
            }}
          >
            Read more &gt;
          </a>
        </Link>
      </div>
    </div>
  )
}
