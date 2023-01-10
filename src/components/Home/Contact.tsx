/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'
import { EMAIL, PHONE_NUMBER, TWITTER_URL } from 'utils'

export const Contact = () => {
  return (
    <div
      id="contactMe"
      className="flex flex-col items-center justify-center w-11/12 max-w-5xl mx-auto md:w-10/12 my-36"
    >
      <h2 className="mb-5 text-4xl text-white ">
        Contact Me
        <span className="text-secondary">!</span>
      </h2>
      <p className="my-3 text-center text-white">
        Hi, I'm happy cuz you are visiting my portfolio, I hope u like it and if
        you're looking for a someone to convert your ideas to a real project or
        consulting, also if u need help plz reach me I will be happy to help you
      </p>
      <div className="flex flex-col mt-3 mb-3 md:flex-row">
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
