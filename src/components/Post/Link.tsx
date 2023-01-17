import { LinkProps, MdxComponent } from 'types'

export const Link = ({ children, href }: LinkProps) => {
  return <Link href={href}>{children}</Link>
}
