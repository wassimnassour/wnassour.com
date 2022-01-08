/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const Tag = ({ children, styles }: MdxComponent) => {
  return (
    <div
      sx={{
        bg: 'gray',
        display: 'inline',
        px: [2],
        py: [1],
        mx: [1],
        color: 'white',
        borderRadius: 6,
        width: '100%',
        ...styles,
      }}
    >
      {children}
    </div>
  )
}
