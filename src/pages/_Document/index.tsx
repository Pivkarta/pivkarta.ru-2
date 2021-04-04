import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from 'src/theme/muiTheme'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />

          {/* <!-- Yandex.Metrika counter --> */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              `,
            }}
          />
          {/* <!-- /Yandex.Metrika counter --> */}

          <base href="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet()
  // const sheetsRegistry = new SheetsRegistry()
  // const generateClassName = createGenerateClassName()

  // Render app and page and get the context of the page with collected side effects.
  const MUIsheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return (
          <>
            {MUIsheets.collect(<>{sheet.collectStyles(<App {...props} />)}</>)}
          </>
        )
      },
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      MUIsheets.getStyleElement(),
      sheet.getStyleElement(),
    ],
  }
}
