import { MdxComponent } from 'types'
import cx from 'utils/cx'

export const Li = ({ children, className }: MdxComponent) => {
  return (
    <li className={cx('mt-3 text-white list-inside', !!className && className)}>
      {children}
    </li>
  )
}
