import Link from 'next/link'
import Image from 'next/image'

import { ABOUT } from 'constant'

export const About = () => {
  return (
    <div id="about" className="flex items-center justify-center my-16 mb-28">
      <div className="flex flex-col items-start justify-start w-11/12 max-w-5xl md:9/12 ">
        <div className="flex items-center justify-center">
          <span className="h-1 mr-1 w-9 bg-secondary "></span>
          <h2 className="text-3xl text-white"> About Me</h2>
        </div>

        <div className="flex flex-col items-center mt-8 md:flex-row">
          {/* <div className="relative hidden w-56 h-48 overflow-hidden rounded-full md:block">
            <Image
              src="/assets/wassim.jpg"
              alt="Picture of the author wassim portfolio"
              layout="fill"
              objectFit="cover" // change to suit your needs
              className="w-full h-full rounded-full " // just an example
            />
          </div> */}
          <p className="ml-6 text-white w-fit">{ABOUT}</p>
        </div>
      </div>
    </div>
  )
}
