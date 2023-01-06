import Link from 'next/link'
import Image from 'next/image'

import { ABOUT } from 'utils'

export const About = () => {
  return (
    <div id="about" className="flex items-center justify-center my-5">
      <div
        // sx={{
        //   display: 'flex',
        //   width: ['90%', '90%', 800, '75%'],
        //   maxWidth: 1100,
        //   flexDirection: 'column',
        // }}
        className="flex flex-col items-start justify-start w-11/12 max-w-4xl md:9/12 "
      >
        <div
          //  sx={{ display: 'flex', alignItems: 'center' }}
          className="flex items-center justify-center"
        >
          <span
            // sx={{
            //   display: 'inline-block',
            //   bg: 'secondary',
            //   height: 2,
            //   width: 30,
            //   mr: 3,
            // }}
            className="mr-1 w-9 h-0.5 bg-secondary "
          ></span>
          <h2 className="text-3xl"> About Me</h2>
        </div>

        <div className="flex flex-column md:flex-row">
          <img
            // sx={{
            //   borderRadius: '50%',
            //   display: ['none', 'block'],
            //   width: [140, 200],
            //   height: [140, 200],
            //   objectFit: 'cover',
            // }}
            className="w-36 h-36 md:w-52"
            src="/assets/wassim.jpg"
            alt="wassim portfolio"
          />

          <p
          // sx={{ color: 'white', ml: [0, 4] }}
          >
            {ABOUT}
          </p>
        </div>
      </div>
    </div>
  )
}
