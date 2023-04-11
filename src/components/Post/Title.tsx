import { MdxComponent } from 'types'

export const Title = ({ children }: MdxComponent) => {
  return (
    <h1
      className="mt-16 mb-4 text-3xl font-extrabold  text-white block    md:text-5xl lg:text-5xl !leading-tight"
      // style={{ lineHeight: 1.3 }}
    >
      {children}
    </h1>
  )
}
