import { socialLinks } from 'utils'

export const LeftSection = () => (
  <aside className=" col-span-1 p-3 md:p-0 md:col-span-2 w-full my-8 lg:my-0   h-full ">
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
      Wassim Nassour
    </h1>
    <span className="block text-lg font-normal mt-4 tracking-tight text-slate-200 sm:text-xl">
      Fullstack Engineer
    </span>
    <ul className="lg:mt-10 space-y-4 lg:block hidden">
      {['About', 'Experience']?.map((link) => (
        <a
          className="group flex items-center py-3 "
          href={'#' + link}
          key={link}
        >
          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
            {link}
          </span>
        </a>
      ))}
    </ul>
    <ul className="flex gap-x-7  mt-10 lg:mt-6  lg:sticky bottom-6">
      {socialLinks?.map((li) => (
        <li key={li.url}>
          <a href="">{li.icon}</a>
        </li>
      ))}
    </ul>
  </aside>
)
