import Link from 'next/link'
import React from 'react'

import { NAV_LINKS } from 'utils'
import { Close } from 'ui/icons'
import cx from 'utils/cx'

interface Props {
  isBackDropOpen: boolean
  toggleBackDrop: () => void
}

export const SideBar = ({ isBackDropOpen, toggleBackDrop }: Props) => {
  return (
    <div
      className={cx(
        'absolute top-0 left-0  ',
        isBackDropOpen ? 'flex md:hidden' : 'hidden'
      )}
    >
      <div
        onClick={() => toggleBackDrop()}
        className="w-1/2 md:w-2/3 fixed h-full bg-[#1a1a1b7d]"
      />
      <div className="fixed top-0 bottom-0 right-0 flex flex-col w-3/5 h-full pt-6 md:w-2/6 bg-secondary">
        <button
          className="block pl-2 text-white md:hidden "
          onClick={() => toggleBackDrop()}
        >
          <Close />
        </button>

        <ul className="pt-5 pl-4">
          {NAV_LINKS.map((_item) => (
            <li
              key={_item.name}
              className="mx-2 my-3 text-white list-none cursor-pointer"
              onClick={() => toggleBackDrop()}
            >
              <Link href={_item.url}>{_item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
