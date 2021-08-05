/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { Box } from 'theme-ui'
import Link from 'next/link'
export const Nav = () => {
  return (
    <Box
      sx={{
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        bg: 'primary',
        zIndex: 333,
        boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px #0d142b',
        position: 'sticky',
        top: 0,
        // variant: 'containers.card.boxShadow',
      }}
    >
      <div>
        <h1 sx={{ color: 'white' }}>
          <span sx={{ color: 'secondary' }}>W</span>N
        </h1>
      </div>
      <nav>
        <ul sx={{ display: 'flex', flexDirection: 'row' }}>
          <li sx={styles.item}>
            <Link href="/">
              <a sx={{ color: 'whitesmoke', my: 3, display: 'block' }}>Home</a>
            </Link>
          </li>
          <li sx={styles.item}>
            <Link href="/blog">
              <a sx={{ color: 'whitesmoke', my: 3, display: 'block' }}>Blog</a>
            </Link>
          </li>
          <li sx={styles.item}>
            <Link href="/#contactMe">
              <a
                sx={{
                  color: 'whitesmoke',
                  my: 3,
                  display: 'block',
                }}
              >
                Contact Me
              </a>
            </Link>
          </li>
          <li sx={styles.item}>
            <Link href="/#about">
              <a
                sx={{
                  color: 'whitesmoke',
                  my: 3,
                  display: 'block',
                }}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Box>
  )
}

const styles = {
  item: {
    listStyle: 'none',
    cursor: 'pointer',
    mx: 3,
    color: 'white',
  },
}
