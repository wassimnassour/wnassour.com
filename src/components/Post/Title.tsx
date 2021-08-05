/** @jsxImportSource theme-ui */
import { Container, jsx } from 'theme-ui'
import React from 'react'

const Title: React.FC = ({ children }) => {
  return (
    <div>
      <h1 sx={{ color: 'white', fontSize: [33, 44] }}>{children}</h1>
    </div>
  )
}

export default Title
