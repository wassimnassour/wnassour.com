/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { jsx } from 'theme-ui'

export const Blog = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 3,
      }}
    >
      <div sx={{ width: ['90%', '80%', '64%'] }}>
        <h2 sx={{ color: 'white' }}> Blog</h2>
        <div sx={{ display: 'flex' }}>
          {[{}, {}, {}].map((el) => (
            <div
              sx={{
                flex: 1 / 3,
                mr: 4,
                p: 3,
                borderRadius: 7,
                bg: '#49536b',
              }}
            >
              <span sx={{ color: 'gainsboro', m: 1 }}>12/20/2021</span>
              <h1 sx={{ fontSize: 22, color: 'white' }}>
                Demystifying styled-components
              </h1>
              <p sx={{ fontSize: 16, color: 'whitesmoke' }}>
                For so many React devs, styled-components seems kinda magical.
                It isn't at all clear how it uses traditional CSS features
                under-the-hood, and that lack of clarity can cause real problems
                when things go awry. In this post, we'll learn exactly how
                styled-components works by building our own mini-version.
              </p>
              <p sx={{ color: 'white', fontWeight: 700 }}>Read More</p>
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
