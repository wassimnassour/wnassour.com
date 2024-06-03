import mdxx from '@next/mdx'
const withMDX = mdxx({
  extension: /\.mdx?$/
})

export default withMDX({
  reactStrictMode: true,
  env: {
    DISABLE_NEW_JSX_TRANSFORM: process.env.DISABLE_NEW_JSX_TRANSFORM
  },
  images: {
    domains: ['lh6.googleusercontent.com', 'media.giphy.com']
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
