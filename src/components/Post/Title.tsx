/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const Title = ({ children, styles }: MdxComponent) => {
  return (
    <h1 sx={{ color: 'white', mb: 1, fontSize: [33, 44], ...styles }}>
      {children}
    </h1>
  )
}
