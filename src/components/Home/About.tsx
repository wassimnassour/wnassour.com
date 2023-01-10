import Link from 'next/link'
import Image from 'next/image'

import { ABOUT } from 'utils'

export const About = () => {
  return (
    <div id="about" className="flex items-center justify-center my-16 mb-28">
      <div className="flex flex-col items-start justify-start w-11/12 max-w-5xl md:9/12 ">
        <div className="flex items-center justify-center">
          <span className="h-1 mr-1 w-9 bg-secondary "></span>
          <h2 className="text-3xl text-white"> About Me</h2>
        </div>

        <div className="flex flex-col items-center mt-8 md:flex-row">
          <img
            className="hidden object-cover h-56 rounded-full w-36 h-36 md:w-56 md:block"
            src="/assets/wassim.jpg"
            alt="wassim portfolio"
          />

          <p className="ml-6 text-white">{ABOUT}</p>
        </div>
      </div>
    </div>
  )
}
