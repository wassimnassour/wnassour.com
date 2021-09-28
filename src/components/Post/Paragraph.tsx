/** @jsxImportSource theme-ui */
import { Container, jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const Paragraph = ({ children, styles }: MdxComponent) => {
  return (
    <div>
      <p sx={{ color: 'white', fontSize: [15, 17], ...styles }}>{children}</p>
    </div>
  )
}
