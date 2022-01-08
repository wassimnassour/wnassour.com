/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { LinkProps, MdxComponent } from 'types'

export const Link = ({ children, styles, href }: LinkProps) => {
  return (
    <a
      sx={{ color: '#99b1fb', ...styles }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
