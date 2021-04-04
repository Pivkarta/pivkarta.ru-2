import React, { useMemo } from 'react'
import NextApp, { AppContext as NextAppContext } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles/'
import CssBaseline from '@material-ui/core/CssBaseline'
import muiTheme from 'src/theme/muiTheme'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'

import { useApollo, initializeApollo } from 'src/lib/apolloClient'

import Head from 'next/head'

import {
  AppDataDocument,
  AppDataQuery,
  AppDataQueryVariables,
  useAppDataQuery,
} from 'src/modules/gql/generated'

import {
  MainApp,
  AppProps,
  AppInitialPropsCustom,
  NextPageContextCustom,
} from './interfaces'
import { NextSeo, NextSeoProps } from 'next-seo'
import Page404 from '../_Error/404'
import ErrorPage from '../_Error'
import Layout from './Layout'
import { AppContext, AppContextValue } from './Context'
import { GlobalStyle } from 'src/theme/GlobalStyle'
import moment from 'moment'

moment.locale('ru')

// import chalk from 'chalk';
// import Debug from 'debug';
// const debug = Debug('apolloClient');

const withWs = false

const App: MainApp<AppProps> = ({ Component, pageProps }) => {
  // debug(chalk[pageProps.apolloClient ? 'green' : 'red']('MyApp pageProps apolloClient exists'))

  const { statusCode } = pageProps

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }

    // const jssStyles2 = document.querySelector('#server-side-jss')
    // if (jssStyles2) {
    //   jssStyles2.parentElement?.removeChild(jssStyles2)
    // }
  }, [])

  // const {
  //   // apolloClient: store,
  //   // apolloClient,
  // } = pageProps;

  // const apolloClient = useApollo(pageProps.initialApolloState, store as ApolloClientNormolized);
  const apolloClient = useApollo(pageProps.initialApolloState, false)

  // debug(chalk[apolloClient ? 'green' : 'red']('MyApp apolloClient exists'))

  /**
   * Получаем основные данные приложения
   */

  const appData = useAppDataQuery({
    client: apolloClient,
  })

  /**
   * Формируем контекст
   */

  const context = useMemo<AppContextValue>(() => {
    return {
      appData: appData.data,
    }
  }, [appData.data])

  const content = useMemo(() => {
    const meta: NextSeoProps = {}

    let content: JSX.Element | null = null

    /**
     * If got error code, show error page instead
     */
    if (statusCode && statusCode !== 200) {
      switch (statusCode) {
        case 404:
          meta.noindex = true
          meta.nofollow = true

          content = <Page404 {...pageProps} />

          break

        default:
          content = <ErrorPage statusCode={statusCode} {...pageProps} />
      }
    } else {
      /**
       * If OK, show page Component
       */
      content = <Component {...pageProps} />
    }

    return (
      <>
        <NextSeo {...meta} />
        {content}
      </>
    )
  }, [statusCode, pageProps])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          {/* 
          PWA primary color 
        */}
          <meta name="theme-color" content={muiTheme.palette.primary.main} />
        </Head>

        <style jsx global>{`
          #__next {
            height: 100%;
          }
        `}</style>

        {/* 
        CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. 
      */}
        <CssBaseline />

        <ApolloProvider client={apolloClient}>
          <AppContext.Provider value={context}>
            <Layout>{content}</Layout>
          </AppContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

App.getInitialProps = async (appContext: NextAppContext) => {
  /**
   * Initialize apollo-client and path into page props for collect
   * all data in cache.
   */
  const apolloClient = initializeApollo({
    withWs,
    appContext,
  })

  /**
   * Получаем основные данные приложения
   */
  const appData = await apolloClient.query<AppDataQuery, AppDataQueryVariables>(
    {
      query: AppDataDocument,
      variables: {},
    }
  )

  const cities: NextPageContextCustom['cities'] = []

  appData.data.cities.forEach((n) => {
    if (n) {
      cities.push(n)
    }
  })

  /**
   * Передаваемый далее в страницу контекст
   */
  const ctx: NextPageContextCustom = {
    ...appContext.ctx,
    apolloClient,
    cities,
  }

  const newAppContext = {
    ...appContext,
    ctx,
  }

  /**
   * Call final _App.getInitialProps, _Document.getInitialProps() and page.getInitialProps()
   */
  const appProps = await NextApp.getInitialProps(newAppContext)

  const { pageProps, ...otherProps } = appProps

  const newProps: AppInitialPropsCustom = {
    ...otherProps,
    pageProps: {
      ...pageProps,
      initialApolloState: apolloClient.cache.extract(),
    },
  }

  /**
   * Got server statusCode
   */
  const { statusCode } = newProps.pageProps

  /**
   * If server-side, add response http code
   */
  if (statusCode && statusCode !== 200 && newAppContext.ctx.res) {
    newAppContext.ctx.res.statusCode = statusCode
  }

  return newProps
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   /**
//    * Для того, чтобы в итоге можно было собрать общий аполло-стейт
//    * с приложения и далее выполняемый страниц и документа,
//    * передаем аполло-клиент далее в контекст приложения.
//    */
//   const apolloClient = initializeApollo({
//     withWs: false,
//     appContext,
//   })

//   const newAppContext = {
//     ...appContext,
//     ctx: {
//       ...appContext.ctx,
//       apolloClient,
//     } as NextPageContextCustom,
//   }

//   /**
//    * Здесь вызывается page.getInitialProps() и далее _document.getInitialProps()
//    * Все собирается в конечный appProps
//    */
//   const appProps = await App.getInitialProps(newAppContext)

//   const { pageProps, ...otherProps } = appProps

//     /**
//      * Load global API data
//      */
//     ; (await apolloClient.query({
//       query: CitiesDocument,
//       variables: {},
//     })) as CitiesQueryResult

//   const newProps: AppInitialProps = {
//     ...otherProps,
//     pageProps: {
//       ...pageProps,
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   }

//   return newProps
// }

export default App
