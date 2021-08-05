/** @jsxImportSource theme-ui */

import Link from 'next/link'
import Image from 'next/image'
import { jsx } from 'theme-ui'

export const About = () => {
  return (
    <div
      id="about"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 5,
      }}
    >
      <div
        sx={{
          width: ['90%', '87%', '87%', '65%'],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
          <h2 sx={{ color: 'white', fontSize: 32 }}> About Me</h2>
        </div>

        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            width: '100%',
            alignItems: ['flex-start', 'center'],
          }}
        >
          <img
            sx={{
              borderRadius: '50%',
              display: ['none', 'block'],
              width: [140, 200],
              height: [140, 200],
            }}
            src="https://picsum.photos/400/400"
            alt="A photograph of sliced kiwifruit on a while plate"
          />

          <p sx={{ color: 'white', ml: [0, 4] }}>
            This is kiwifruit: originally called “yang tao”, “melonette” and
            Chinese gooseberry. Cultivaed in its fuzzy variety from Chinese
            imports, the fruit proved popular with American military servicemen
            stationed in New Zealand during World War II, with commercial export
            to the United States starting after the end of the war.
          </p>
        </div>
      </div>
    </div>
  )
}
