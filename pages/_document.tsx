import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css"
          ></link>
          <meta
            name="google-site-verification"
            content="wIl0o-8xCq31APjqwuVU0ZoIrOFi141bPpz7P9bVVyU"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Quicksand;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument
