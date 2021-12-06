/* eslint-disable react/no-unescaped-entities */
/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { jsx } from 'theme-ui'
import { EMAIL, PHONE_NUMBER, TWITTER_URL } from 'utils'

export const Contact = () => {
  return (
    <div
      id="contactMe"
      sx={{
        width: ['90%', '80%', '75%', '60%'],
        mx: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        my: 6,
      }}
    >
      <h2 sx={{ color: 'white', fontSize: 40, mb: 2 }}>
        Contact Me<span sx={{ color: 'secondary' }}>!</span>
      </h2>
      <p sx={{ color: 'whitesmoke', textAlign: 'center' }}>
        Hi, i'm happy cuz your are visiting my portfolio , i hope u like it and
        if you're looking for semoan to convert your ideas to real project or
        consulting , also if u need help plz reach me i will be happy to help
        you
      </p>
      <div sx={{ mb: 3, display: 'flex', flexDirection: ['column', 'row'] }}>
        <a
          sx={styles.button}
          href={TWITTER_URL}
          target="_blank"
          rel="noreferrer"
        >
          Contact me Via Twitter{' '}
        </a>
        <a href={`mailto:${EMAIL}`} sx={styles.button}>
          Contact me Via Email{' '}
        </a>
        <a href={`tel:${PHONE_NUMBER}`} sx={styles.button}>
          Contact me Via Number{' '}
        </a>
      </div>
    </div>
  )
}

const styles = {
  button: {
    bg: 'secondary',
    border: 'none',
    p: 3,
    borderRadius: 4,
    mx: 2,
    mt: 3,
    color: 'white',
  },
}
