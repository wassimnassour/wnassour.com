/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { jsx } from 'theme-ui'
import MobileDevelopmentIcon from '../../../ui/icons/MobileDev'

export const About = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          width: ['90%', '75%', '64%'],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 sx={{ color: 'white' }}> About Me</h2>
        <div sx={{ display: 'flex' }}>
          {[{}, {}, {}].map((el) => (
            <div
              sx={{
                flex: [1, 1 / 3],
                bg: 'secondary',
                mr: 4,
                p: 3,
                borderRadius: 7,
              }}
            >
              <MobileDevelopmentIcon />
              <h3 sx={{ color: 'white', borderBottomColor: 'primary' }}>
                Front-End
              </h3>
              <p sx={{ color: 'whitesmoke', width: '90%' }}>
                I worked as softwer Engineer 3 years at I worked
              </p>
            </div>
          ))}
        </div>
        <Link href="/about">
          <a
            sx={{
              color: 'whitesmoke',
              my: 3,
              display: 'inline-block',
              textDecoration: 'underline',
            }}
          >
            know More About me &gt;
          </a>
        </Link>
      </div>
    </div>
  )
}
