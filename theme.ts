// with Emotion's JSX function
// this is typically handled with the Emotion Babel preset
/** @jsxImportSource @emotion/react */

import { roboto } from '@theme-ui/presets'
import { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

export const theme = makeTheme<any>({
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },
  styles: {
    ...roboto.styles,
  },
})
export type ExactTheme = typeof theme
