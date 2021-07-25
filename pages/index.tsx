/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { About, Blog, Hero } from 'components'

export default function Home() {
  return (
    <div
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Hero />
      <About />
      <Blog />
    </div>
  )
}
