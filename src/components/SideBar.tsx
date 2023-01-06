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
      <div className="fixed pt-6 top-0 right-0 bottom-0 w-3/5 md:w-2/6 flex flex-col bg-blue-700 h-full">
        <button
          className="block md:hidden text-white pl-2 "
          onClick={() => toggleBackDrop()}
        >
          <Close />
        </button>

        <ul className="pt-5 pl-4">
          {NAV_LINKS.map((_item) => (
            <li
              key={_item.name}
              className="mx-2 text-white cursor-pointer list-none my-3"
              onClick={() => toggleBackDrop()}
            >
              <Link href={_item.url} className=" ">
                {_item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
