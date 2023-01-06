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
  console.log('isBackDropOpen', isBackDropOpen)

  return (
    <div className="h-24 sticky top-0 w-full px-5 sm:px-0  flex items-center md:justify-between lg:justify-around bg-primary  shadow-md">
      <div className="max-w-5xl">
        <Link href="/">
          <h1 className="font-bold italic text-3xl">
            <span className="text-secondary">W</span>N
          </h1>
        </Link>
      </div>

      <SideBar
        isBackDropOpen={isBackDropOpen}
        toggleBackDrop={toggleBackDrop}
      />

      <button
        className="block ml-auto  md:hidden "
        onClick={() => toggleBackDrop()}
      >
        <Menu />
      </button>

      <nav className=" hidden  flex-row  items-center md:flex">
        <ul className="flex flex-row">
          {NAV_LINKS.map((_item) => (
            <li
              key={_item.name}
              className="mx-3 cursor-pointer"
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
