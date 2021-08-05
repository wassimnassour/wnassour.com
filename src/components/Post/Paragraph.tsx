/** @jsxImportSource theme-ui */
import { Container, jsx } from 'theme-ui'
import React from 'react'

export const Paragraph: React.FC = ({ children }) => {
  return (
    <div>
      <p sx={{ color: 'white', fontSize: 17 }}>{children}</p>
    </div>
  )
}
