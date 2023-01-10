import { MdxComponent } from 'types'

export const H2 = ({ children }: MdxComponent) => {
  return <h2 className="mt-8 mb-2 text-2xl dark:text-white">{children}</h2>
}
