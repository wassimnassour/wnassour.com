/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { Meta } from './Meta'

type Props = {
  children: React.ReactNode
  pageTitle?: string
}

export const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />

      <div sx={{ width: ['90%', '80', 720, 800], m: 'auto' }}>
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  )
}
