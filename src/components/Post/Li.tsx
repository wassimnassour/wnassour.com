/** @jsxImportSource theme-ui */
import { Container, jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const Li = ({ children, styles }: MdxComponent) => {
  return <li sx={{ color: 'white', mt: [3], ...styles }}>{children}</li>
}
