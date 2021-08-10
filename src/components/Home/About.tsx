/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */

import Link from 'next/link'
import Image from 'next/image'
import { jsx } from 'theme-ui'
import { ABOUT } from 'utils'

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
          width: ['90%', '90%', 800, 1000],
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
              objectFit: 'cover',
            }}
            src="/assets/wassim.jpg"
            alt="wassim portfolio"
          />

          <p sx={{ color: 'white', ml: [0, 4] }}>{ABOUT}</p>
        </div>
      </div>
    </div>
  )
}
