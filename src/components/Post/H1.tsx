import { MdxComponent } from 'types'
import cx from 'utils/cx'

export const H1 = ({ children, className }: MdxComponent) => {
  return (
    <h1
      className={cx(
        'mb-4 text-5xl !font-bold text-white mt-9 ',
        !!className && className
      )}
    >
      {children}
    </h1>
  )
}
