import { MdxComponent } from 'types'
import cx from 'utils/cx'

export const BlockQuote = ({ children, className }: MdxComponent) => {
  return (
    <blockquote
      className={cx(
        'p-4 my-4 text-white border-l-4 border-secondary bg-gray-50 dark:bg-gray-800',
        !!className && className
      )}
    >
      <p>{children}</p>
    </blockquote>
  )
}
