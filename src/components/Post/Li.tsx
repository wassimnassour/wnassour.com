import { MdxComponent } from 'types'
import cx from 'utils/cx'

export const Li = ({ children, className }: MdxComponent) => {
  return (
    <li
      className={cx(
        'mt-3  text-secondary  text-base list-red list-inside',
        !!className && className
      )}
    >
      <div className="inline text-white ">{children}</div>
    </li>
  )
}
