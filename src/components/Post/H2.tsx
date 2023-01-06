import { MdxComponent } from 'types'

export const H2 = ({ children }: MdxComponent) => {
  return (
    <h2
    // sx={{ color: 'white', fontSize: 20, ...styles }}
    >
      {children}
    </h2>
  )
}
