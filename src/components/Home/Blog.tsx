/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { jsx } from 'theme-ui'
import { IPost } from 'types'
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
        my: 4,
        mt: [3, 3, 6],
      }}
    >
      <div sx={{ width: ['90%', '90%', 800, '75%'], maxWidth: 1100 }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
        <div
          sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'] }}
        >
          {Posts.map((post) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={`/posts/${post.slug}`} key={post.title}>
              <a sx={{ cursor: 'pointer' }}>
                <div
                  sx={{
                    flex: [1, 1 / 2, 1 / 3],
                    mr: [0, 0, 3, 3],
                    my: [2, 2, 0],
                    p: 2,
                    borderRadius: 2,
                    bg: '#49536b',
                  }}
                >
                  <h1 sx={{ fontSize: 22, color: 'white' }}>{post.title}</h1>
                  <p sx={{ fontSize: 16, color: 'whitesmoke' }}>
                    {post.excerpt.substring(1, 400)}...
                  </p>
                  <div
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span sx={{ color: 'gainsboro', m: 1 }}>{post.date}</span>
                    <span sx={{ color: 'gainsboro', m: 1 }}>4 min read</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
