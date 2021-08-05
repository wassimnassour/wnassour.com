/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import React, { useState } from 'react'

export const CodeBlock = ({
  language = 'jsx',
  children,
}: {
  children: string
  language: Language
}) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={children}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        sx={{
          borderRadius: 10,
          bg: '#262b3e !important',
          textAlign: 'left',
          my: '2em',
          py: 3,
          px: 0.6,
          overflow: 'scroll',
        }}
        className={className}
        style={style}
      >
        {tokens.map((line, i) => (
          <div
            sx={{ display: 'table-row' }}
            key={i}
            {...getLineProps({ line, key: i })}
          >
            <span
              sx={{
                display: 'table-cell',
                textAlign: 'right',
                paddingRight: '1em',
                userSelect: 'none',
                opacity: 0.5,
              }}
            >
              {i + 1}
            </span>
            <span sx={{ display: 'table-cell', fontSize: 15 }}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </span>
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
