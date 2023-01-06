/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'
import { EMAIL, PHONE_NUMBER, TWITTER_URL } from 'utils'

export const Contact = () => {
  return (
    <div
      id="contactMe"
      className="w-11/12 md:w-10/12 max-w-5xl flex  flex-col items-center justify-center mx-auto my-36"
    >
      <h2 className="text-4xl mb-5 text-white ">
        Contact Me
        <span className="text-secondary">!</span>
      </h2>
      <p className="text-center text-white my-3">
        Hi, i'm happy cuz your are visiting my portfolio , i hope u like it and
        if you're looking for semoan to convert your ideas to real project or
        consulting , also if u need help plz reach me i will be happy to help
        you
      </p>
      <div className="flex flex-col md:flex-row mb-3 mt-3">
        <a
          className={button}
          href={TWITTER_URL}
          target="_blank"
          rel="noreferrer"
        >
          Contact me Via Twitter{' '}
        </a>
        <a href={`mailto:${EMAIL}`} className={button}>
          Contact me Via Email{' '}
        </a>
        <a href={`tel:${PHONE_NUMBER}`} className={button}>
          Contact me Via Number{' '}
        </a>
      </div>
    </div>
  )
}

const button =
  'bg-secondary border-none p-3 border rounded-md text-white mx-2 mt-3'
