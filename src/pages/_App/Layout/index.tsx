import React, { useMemo } from 'react'

import Link from 'next/link'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import MainMenu from './MainMenu'

/**
 * Общий лейаут для всех страниц сайта
 */
const Layout: React.FC = ({ children, ...other }) => {
  const counters = useMemo(() => {
    const metrika = `<!-- Yandex.Metrika informer -->
      <a rel="noreferrer noopener" href="https://metrika.yandex.ru/stat/?id=26848689&amp;from=informer"
      target="_blank" rel="nofollow"><img src="https://bs.yandex.ru/informer/26848689/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
      style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try{Ya.Metrika.informer({i:this,id:26848689,lang:'ru'});return false}catch(e){}"/></a>
      <!-- /Yandex.Metrika informer -->
    `

    return (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <div dangerouslySetInnerHTML={{ __html: metrika }} />
        </Grid>

        <Grid item>
          &copy;{' '}
          <a
            href="https://freecode.academy"
            rel="noreferrer noopener"
            target="_blank"
            title="Разработка сайтов и интернет-магазинов на JavaScript"
          >
            FreeCode.Academy
          </a>
        </Grid>
      </Grid>
    )
  }, [])

  return useMemo(() => {
    return (
      <div
        style={{
          // maxWidth: 1260,
          width: '100%',
          margin: '0 auto',
          // padding: '0 16px',
          height: '100%',
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'column',
        }}
        {...other}
      >
        {/* {pageReloading
    ?
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="preloader"
      />
    </div>
    :
    null
  } */}

        <MainMenu />

        <div
          style={{
            overflow: 'auto',
            flex: 1,
            // border: '1px solid green',
          }}
        >
          <div
            style={{
              maxWidth: 1260,
              margin: '0 auto',
              padding: '20px 16px',
            }}
          >
            {children}

            <CardContent>
              <Grid
                container
                spacing={1}
                style={{
                  paddingTop: 30,
                }}
              >
                <Grid item xs>
                  {counters}
                </Grid>

                <Grid item>
                  <Link href="/ratings">
                    <a title="Рейтинги бань">Рейтинги бань</a>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/tag">
                    <a title="Теги">Теги</a>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/people">
                    <a title="Участники">Участники</a>
                  </Link>
                </Grid>

                {/* <Grid item>
                  <Link href="/contacts.html">
                    <a title="Разместить информацию о бане">
                      Добавить баню или сауну
                    </a>
                  </Link>
                </Grid> */}
              </Grid>
            </CardContent>
          </div>
        </div>
      </div>
    )
  }, [children, counters, other])
}

export default Layout
