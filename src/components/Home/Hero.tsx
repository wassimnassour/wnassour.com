/* eslint-disable react/no-unescaped-entities */
/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'

export const Hero = () => {
  return (
    <div
      sx={{
        bg: 'primary',
        clipPath: 'polygon(0 0, 100% 0, 100% 74%, 0 100%)',
        height: 450,
      }}
    >
      <div
        sx={{
          width: ['90%', '80%', '75%', '60%'],
          mx: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <span sx={{ color: 'gainsboro' }}>Software developer</span>
        <h2
          sx={{
            color: 'white',
            fontSize: [34, 54],
            fontWeight: '700',
            lineHeight: 0.3,
          }}
        >
          Wassim Nassour
        </h2>
        <p sx={{ color: 'GrayText' }}>
          I'm a Self-taught JavaScript Developer, proficient in Front-End, I'm
          passionate about the Tech world, skilled at writing clean and readable
          Code, by using current best practices in web development
        </p>
        <p sx={{ color: 'white', borderBottom: '1px solid red' }}>
          Let's have Chat
        </p>
      </div>
    </div>
  )
}
