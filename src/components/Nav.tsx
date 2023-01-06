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
    <div className="sticky top-0 z-20 flex items-center w-full h-24 px-8 shadow-md md:px-0 md:justify-between lg:justify-around bg-primary">
      <div className="flex items-center justify-between w-11/12 max-w-5xl mx-auto md:9/12">
        <div className="max-w-5xl">
          <Link href="/">
            <h1 className="text-3xl italic font-bold text-white">
              <span className="text-secondary">W</span>N
            </h1>
          </Link>
        </div>
        <nav className="flex-row items-center hidden md:flex">
          <ul className="flex flex-row">
            {NAV_LINKS.map((_item) => (
              <li
                key={_item.name}
                className="mx-3 text-white cursor-pointer"
                onClick={() => setBackDrop(false)}
              >
                <Link href={_item.url} className="my-3">
                  {_item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SideBar
        isBackDropOpen={isBackDropOpen}
        toggleBackDrop={toggleBackDrop}
      />

      <button
        className="block ml-auto md:hidden "
        onClick={() => toggleBackDrop()}
      >
        <Menu className="fill-white" />
      </button>
    </div>
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
