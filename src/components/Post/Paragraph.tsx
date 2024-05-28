import { MdxComponent } from 'types'

export const Paragraph = ({ children }: MdxComponent) => {
  return <div className="inline pb-5 text-lg leading-7 text-gray-200 md:leading-9 ">{children}</div>
}
