import { CSSProperties, ReactChild } from 'react'

export interface MdxComponent {
  children: ReactChild
  className?: string
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
