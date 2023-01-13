import { MdxComponent } from 'types'

export const Tag = ({ children }: MdxComponent) => {
  return (
    <div className="inline-block px-2 py-0 mx-1 text-white bg-gray-600 rounded-md w-fit">
      {children}
    </div>
  )
}
