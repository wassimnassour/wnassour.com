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
      <h4 sx={{ color: 'gainsboro' }}>
        {' '}
        Created by @Wassim built with @NextJs deployed in @Vercel
      </h4>
      {/* <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '70%',
          borderBottom: '1px solid #EB4A4A',
        }}
      >
        <ul sx={{ display: 'flex', ...styles.ul }}>
          <li sx={styles.li}>Home</li>
          <li sx={styles.li}>blog</li>
          <li sx={styles.li}>About me</li>
          <li sx={styles.li}>contact me </li>
        </ul>
        <h4 sx={{ color: 'gainsboro' }}>Created by @Wassim</h4>
      </div> */}
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
