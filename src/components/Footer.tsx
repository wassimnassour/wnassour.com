/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'

export const Footer = () => {
  return (
    <div
      sx={{
        mt: 4,
        p: 3,
        bg: 'primary',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h4 sx={{ color: 'gainsboro', textAlign: 'center' }}>
        Created by @Wassim built with @NextJs deployed in @Vercel
      </h4>
    </div>
  )
}

const styles = {
  ul: {
    color: 'gainsboro',
    listStyle: 'none',
  },
  li: {
    mx: 2,
  },
}
