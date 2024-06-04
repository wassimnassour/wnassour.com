import { socialLinks } from 'constant'
import Link from 'next/link'

export const LeftSection = () => (
  <aside className="md:grid grid-cols-6  p-3 md:p-0  w-full my-8 lg:my-0   h-full ">
    <div className="col-span-2 ">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Wassim Nassour
      </h1>
      <span className="block text-lg font-normal mt-4 tracking-tight text-slate-200 sm:text-xl">
        Fullstack Engineer
      </span>
      <ul className="lg:mt-10 space-y-4 lg:block hidden">
        {['About', 'Experience']?.map(link => (
          <a className="group flex items-center py-3 " href={'#' + link} key={link}>
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {link}
            </span>
          </a>
        ))}
      </ul>
      <ul className="flex gap-x-7 grid-cols-4  mt-10 lg:mt-6  lg:sticky bottom-6">
        {socialLinks?.map(li => (
          <li key={li.url}>
            <a href="">{li.icon}</a>
          </li>
        ))}
      </ul>
    </div>
    <AboutMe />
  </aside>
)

const AboutMe = () => {
  return (
    <div className="w-full col-span-4 mt-4 md:mt-0">
      {/* <h1 className="text-3xl text-white my-3 lg:hidden">About</h1> */}
      <p className=" mb-24 lg:mb-36 leading-7 text-gray-300" id="About">
        My name is Wassim Nassour and I am a self-taught JavaScript Developer with a passion for the
        tech world. I specialize in Front-End development, and I take pride in writing clean and
        readable code using the latest best practices in web development. With 3 years of experience
        as a full-stack engineer, I currently work as a Front-End developer at Obytes. Outside of
        work, I keep up with programming and technology trends and enjoy writing{' '}
        <Link href="/blog" className="text-secondary">
          Articles
        </Link>{' '}
        in my free time. My ultimate goal is to create high-performance applications using the
        latest technologies and share my knowledge with the community. Thank you for visiting my
        website!
      </p>
    </div>
  )
}
