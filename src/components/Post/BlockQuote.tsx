/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { blockQuoteProps } from 'types'

export const BlockQuote = ({ children, styles }: blockQuoteProps) => {
  console.log(children)

  return (
    <blockquote
      sx={{
        bg: '#656c7a',
        px: [2],
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
