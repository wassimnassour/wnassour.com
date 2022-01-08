/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { MdxComponent } from 'types'

export const BlockQuote = ({ children, styles }: MdxComponent) => {
  return (
    <blockquote
      sx={{
        bg: '#656c7a',
        px: [3],
        py: [1],
        mx: [1],
        color: 'white',
        borderRadius: 6,
        borderLeft: '4px solid ',
        borderColor: 'secondary',
        width: '100%',
        ...styles,
      }}
    >
      <p>{children}</p>
    </blockquote>
  )
}
