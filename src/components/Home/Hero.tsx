import Image from 'next/image'
import Link from 'next/link'

import MobileDevelopmentIcon from 'ui/icons/MobileDev'
import { EMAIL, LINKED_IN_URL, TWITTER_URL, socialLinks } from 'utils'

/* eslint-disable react/no-unescaped-entities */
export const Hero = () => {
  return (
    <div
      className="
         border-b border-gray-700    font-Alegreya_Sans py-20"
      // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
    >
      <div className="flex flex-col items-start justify-center w-11/12 h-full max-w-5xl mx-auto text-white sm:w-10/12 md:9/12">
        <div className="flex  flex-col  md:flex-row  justify-between md:items-center w-full  ">
          <div className="flex">
            <div className="h-24 w-24 rounded-md overflow-hidden  relative">
              <Image
                src="/assets/wassim.jpg"
                fill
                alt="wassim personal picture "
              />
            </div>
            <div className="flex items-start flex-col ml-6 justify-evenly">
              <h2 className="mt-3 text-4xl  md:text-4xl ml-0  font-extrabold ">
                Wassim Nassour
              </h2>
              <span className="text-gray-400 ">Fullstack Engineer</span>
            </div>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            {socialLinks?.map((social) => (
              <a
                href={social.url}
                key={social.url}
                target="_parent"
                className="mr-4"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="font-normal text-gray-300 my-7 text-lg">
          I'm a Self-taught JavaScript Developer, proficient in Front-End, I'm
          passionate about the Tech world, skilled at writing clean and readable
          Code, by using current best practices in web development
        </p>
        <h3 className="font-extrabold text-gray-400 text-xl">Quick intro 👋🏻</h3>
        <ul className="mb-4 pl-1 space-y-1 mt-2 text-lg">
          <li className="">🏠 Working remotely +3 years </li>
          <li className="">💻 interested in fullstack development </li>
          <li className="">
            🛸 Technologies i'm using : React , Typescript , Node , Golang ...{' '}
          </li>
        </ul>
        <a
          target="_blank"
          href={TWITTER_URL}
          className="border-b border-secondary bg-secondary  p-2 rounded"
          rel="noreferrer"
        >
          Let's have Chat
        </a>
      </div>
    </div>
  )
}
