import { MdxComponent } from 'types'

export const Tag = ({ children }: MdxComponent) => {
  return (
    <span className="inline px-[6px] py-[3px] mx-1 text-[#ffffff] text-sm bg-gray-700 rounded-md w-fit">
      {children}
    </span>
  )
}
