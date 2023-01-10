import { MdxComponent } from 'types'

export const Paragraph = ({ children }: MdxComponent) => {
  return (
    <div>
      <p className="leading-7 text-gray-300 ">{children}</p>
    </div>
  )
}
