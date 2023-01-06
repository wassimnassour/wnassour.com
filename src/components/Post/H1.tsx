import { MdxComponent } from 'types'

export const H1 = ({ children, styles }: MdxComponent) => {
  return (
    <h1
    // sx={{ color: 'white', fontSize: [23, 34], ...styles }}
    >
      {children}
    </h1>
  )
}
