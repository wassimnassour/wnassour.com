/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { blockQuoteProps } from 'types'

export const Tag = ({ children, styles }: blockQuoteProps) => {
  console.log(children)

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
