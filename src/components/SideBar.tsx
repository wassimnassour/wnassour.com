/** @jsxImportSource theme-ui */
import Link from 'next/link'
import React from 'react'
import { jsx, MenuButton } from 'theme-ui'
import { NAV_LINKS } from 'utils'
import { Close } from 'ui/icons'

interface Props {
  isBackDropOpen: boolean
  toggleBackDrop: () => void
}

export const SideBar = ({ isBackDropOpen, toggleBackDrop }: Props) => {
  return (
    <div
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: isBackDropOpen ? ['flex', 'flex', 'none'] : 'none',
      }}
    >
      <div
        onClick={() => toggleBackDrop()}
        sx={{
          bg: '#1a1a1b7d',
          height: '100%',
          width: ['50%', '70%'],
          position: 'fixed',
        }}
      />
      <div
        sx={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          height: '100%',
          width: ['60%', '40%', '30%'],
          bg: 'secondary',

          flexDirection: 'column',
        }}
      >
        <button
          sx={{
            p: 4,
            display: ['block', 'block', 'none'],
            left: 0,
            pl: 4,
            bg: 'transparent',
            border: 'none',
            color: 'white',
          }}
          onClick={() => toggleBackDrop()}
        >
          <Close />
        </button>

        <ul sx={{ display: 'flex', flexDirection: 'column' }}>
          {NAV_LINKS.map((_item) => (
            <li
              key={_item.name}
              sx={{
                listStyle: 'none',
                cursor: 'pointer',
                mx: 3,
                color: 'white',
              }}
              onClick={() => toggleBackDrop()}
            >
              <Link href={_item.url}>
                <a sx={{ color: 'whitesmoke', my: 3, display: 'block' }}>
                  {_item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
