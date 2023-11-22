import Link from 'next/link'
import { jobs } from 'constant'

export const ExperienceAndAbout = () => {
  return (
    <div className="col-span-1  lg:col-span-4  p-4 md:p-0">
      <AboutMe />
      <ul className="mt-10 " id="Experience">
        {jobs?.map((job) => (
          <li className="mb-12" key={job.name}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 leading-6"
                aria-label="2018 to Present"
              >
                {job.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-secondary focus-visible:text-teal-300  group/link text-base text-secondary"
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={job.name}
                  >
                    <span>
                      {job.name}
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>

                  <div className="text-slate-500" aria-hidden="true">
                    {job.role}
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal  text-gray-400 whitespace-pre-wrap">
                  {job.description}
                </p>
                <ul className="leading-normal  text-gray-400  text-sm ">
                  {/* Projects */}
                  {job?.projects?.map((project) => (
                    <li
                      className="inline-block mt-4 "
                      key={project.name + 'Projects'}
                    >
                      <h4 className="text-secondary">{project.name}:</h4>
                      <p className="">{project.description}</p>
                    </li>
                  ))}
                  {/* Tasks */}
                  <div className="mt-3">
                    {job?.tasks?.map((task) => (
                      <li className="list-disc ml-6" key={task + 'task'}>
                        {task}
                      </li>
                    ))}
                  </div>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {job.technologies?.map((technology) => (
                    <li className="mr-1.5 mt-2" key={technology}>
                      <div className="flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium leading-5 text-secondary ">
                        {technology}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl text-white my-3 lg:hidden">About</h1>
      <p className=" mb-24 lg:mb-36 leading-7 text-gray-300" id="About">
        My name is Wassim Nassour and I am a self-taught JavaScript Developer
        with a passion for the tech world. I specialize in Front-End
        development, and I take pride in writing clean and readable code using
        the latest best practices in web development. With 3 years of experience
        as a full-stack engineer, I currently work as a Front-End developer at
        Obytes. Outside of work, I keep up with programming and technology
        trends and enjoy writing{' '}
        <Link href="/blog" className="text-secondary">
          Articles
        </Link>{' '}
        in my free time. My ultimate goal is to create high-performance
        applications using the latest technologies and share my knowledge with
        the community. Thank you for visiting my website!
      </p>
    </>
  )
}
