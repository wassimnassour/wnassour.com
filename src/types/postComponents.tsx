import { ReactChild } from 'react'
import { CSSProperties } from 'theme-ui'

export interface MdxComponent {
  children: ReactChild
  styles?: CSSProperties
}

export interface LinkProps extends MdxComponent {
  href: string
}

export interface blockQuoteProps extends Omit<MdxComponent, 'children'> {
  children: {
    props: {
      children: string
    }
  }
}
