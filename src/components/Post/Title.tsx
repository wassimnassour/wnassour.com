import { MdxComponent } from 'types'

export const Title = ({ children }: MdxComponent) => {
  return (
    <h1 className="mt-16 mb-4 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
      {children}
    </h1>
  )
}
