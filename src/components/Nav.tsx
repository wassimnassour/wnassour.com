/** @jsxImportSource theme-ui */
import { Button, jsx } from 'theme-ui'
import { Box } from 'theme-ui'
import Link from 'next/link'
import { useState } from 'react'
import { Close, Menu } from 'ui/icons'
import { NAV_LINKS } from 'utils'
import { SideBar } from 'components'
export const Nav = () => {
  const [isBackDropOpen, setBackDrop] = useState(false)
  const toggleBackDrop = () => {
    setBackDrop(!isBackDropOpen)
  }

  return (
    <Box
      sx={{
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['space-between', 'space-between', 'space-around'],
        px: [3, 3, 0],
        bg: 'primary',
        zIndex: 333,
        width: '100%',
        boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px #0d142b',
        position: 'sticky',
        top: 0,
      }}
    >
      <div sx={{ maxWidth: 1100 }}>
        <Link href="/">
          <a>
            <h1 sx={{ color: 'white' }}>
              <span sx={{ color: 'secondary' }}>W</span>N
            </h1>
          </a>
        </Link>
      </div>
      {
        <SideBar
          isBackDropOpen={isBackDropOpen}
          toggleBackDrop={toggleBackDrop}
        />
      }

      <button
        sx={{
          display: ['block', 'block', 'none'],
          border: 'none',
          bg: 'transparent',
        }}
        onClick={() => toggleBackDrop()}
      >
        <Menu />
      </button>

      <nav sx={{ display: ['none', 'none', 'block'] }}>
        <ul sx={{ display: 'flex', flexDirection: 'row' }}>
          {NAV_LINKS.map((_item) => (
            <li
              key={_item.name}
              sx={styles.item}
              onClick={() => setBackDrop(false)}
            >
              <Link href={_item.url}>
                <a sx={{ color: 'whitesmoke', my: 3, display: 'block' }}>
                  {_item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  )
}

const styles = {
  item: {
    listStyle: 'none',
    cursor: 'pointer',
    mx: 3,
    color: 'white',
  },
}
