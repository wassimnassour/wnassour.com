/** @jsxImportSource theme-ui */
import { Container, jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const H2 = ({ children, styles }: MdxComponent) => {
  return <h2 sx={{ color: 'white', ...styles }}>{children}</h2>
}
