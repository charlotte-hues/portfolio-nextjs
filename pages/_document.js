import Document, {Html, Main, Head, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en" >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />

          <meta name="theme-color" content="#2E3440" />
          <meta
            name="description"
            content="Creative Developer | Designer | Liverpool"
          />
          <title>Charlotte Hughes</title>
        </Head>
        <body>
          <Main />
          <div id="modal-hook"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}