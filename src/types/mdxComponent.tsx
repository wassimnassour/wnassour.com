import { ReactChild } from 'react'
import { CSSProperties } from 'theme-ui'

export interface MdxComponent {
  children: ReactChild
  styles?: CSSProperties
}
