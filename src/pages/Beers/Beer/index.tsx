import React from 'react'
import { useRouter } from 'next/router'
import { Paper, Grid } from '@material-ui/core'
import { imageFormats } from 'src/helpers/imageFormats'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
//import TableContainer from '@material-ui/core/TableContainer'
//import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
//import SvgIcon from 'src/components/ui/SvgIcon'
//import beerSvg from './View/img/beer-solid.svg'

import { TableBold } from './View/styles'

import BeerPlaces from './BeerPlaces'

//import Lightbox from 'react-lightbox-component'
//import { Fancybox } from '@fancyapps/ui'
//import '@fancyapps/ui/dist/fancybox.css'

import {
  useBeerInfoQuery,
  BeerInfoQueryVariables,
} from 'src/modules/gql/generated'
//import { CenterFocusStrong } from '@material-ui/icons'

const getVariables = (beerid: number): BeerInfoQueryVariables => {
  return {
    where: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      beer_id: beerid,
    },
  }
}

const BeerPage = () => {
  const router = useRouter()

  let beerId = 0

  if (router.query.uri && router.query.uri[0]) {
    beerId = parseFloat(router.query.uri[0])
  }

  /**
   * Здесь надо понять, что делать, если останется beerId = 0.
   * Проблема в том, что хук useCompanyInfoQuery должет сработать при любых раскладах,
   * то есть при несоблюдении правила if() прервать нельзя.
   */

  const variables = getVariables(beerId)

  const response = useBeerInfoQuery({
    variables,
  })

  //console.log('Data:', response.data?.object)

  const beerinfo = {
    name: response.data?.object?.name,
    image: response.data?.object?.image,
    region: response.data?.object?.region,
    manufacturer: response.data?.object?.manufacturer,
    color: response.data?.object?.color,
    container: response.data?.object?.container,
    alcohol: response.data?.object?.alcohol,
    wortPercent: response.data?.object?.wort_percent,
    components: response.data?.object?.components,
    bitter: response.data?.object?.bitter,
    filtered:
      response.data?.object?.filtered == null
        ? 'Не данных'
        : response.data?.object?.filtered
        ? 'Фильтрованное'
        : 'Нефильтрованное',
    pasteurized:
      response.data?.object?.pasteurized == null
        ? 'Нет данных'
        : response.data?.object?.pasteurized
        ? 'Пастеризованное'
        : 'Непастеризованное',
    content: response.data?.object?.editor_content,
    gallery: response.data?.object?.gallery,
  }

  let containerName = 'Нет данных'
  switch (beerinfo.container) {
    case 1:
      containerName = 'Бутылка'
      break
    case 2:
      containerName = 'Банка'
      break
    case 3:
      containerName = 'ПЭТ'
      break
    case 4:
      containerName = 'Разливное'
      break
  }

  const blocks =
    beerinfo.content &&
    !Array.isArray(beerinfo.content) &&
    beerinfo.content?.blocks

  const images: {
    src: string
    title?: string | null
    description?: string | null
  }[] = []

  if (Array.isArray(beerinfo.gallery)) {
    beerinfo.gallery.forEach((n: string) => {
      if (n && typeof n === 'string') {
        images.push({
          src: 'https://pivkarta.ru/images/big/' + n,
          title: 'Пиво ' + beerinfo.name,
          description: 'Фото пива ' + beerinfo.name,
        })
      }
    })
  }

  //console.log('images', images)

  return (
    <>
      <Paper style={{ padding: '15px' }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ textAlign: 'center' }}
          >
            {beerinfo.image ? (
              <img
                alt={beerinfo.name || undefined}
                src={
                  'https://pivkarta.ru/' +
                    (beerinfo.image &&
                      imageFormats(beerinfo.image, 'place_avatar')) || undefined
                }
                //src={imageFormats(image, 'thumb')}
                style={{
                  marginRight: 10,
                  marginBottom: 10,
                }}
              />
            ) : null}
          </Grid>
          <Grid item container xs={12} sm={6} md={8} lg={9}>
            {/*<SvgIcon src={beerSvg} alt="beer" />   */}
            <Grid item xs={12}>
              <h1>{beerinfo.name}</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableBold>Регион:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.region}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Тара:</TableBold>
                    </TableCell>
                    <TableCell>{containerName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Алкоголь:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.alcohol}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Плотность:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.wortPercent}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Фильтрация:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.filtered}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableBold>Производитель:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.manufacturer}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Цвет пива:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.color}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Горечь:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.bitter}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Состав:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.components}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableBold>Пастеризация:</TableBold>
                    </TableCell>
                    <TableCell>{beerinfo.pasteurized}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ padding: '15px', marginTop: '15px' }}>
        <h2>Описание пива {beerinfo.name}</h2>

        {blocks?.map(
          (
            contentPart: { text: string | null | undefined },
            index: React.Key | null | undefined
          ) => (
            <p key={index}>{contentPart.text}</p>
          )
        )}
      </Paper>
      <Paper style={{ padding: '15px', marginTop: '15px' }}>
        <h2>Фотографии пива {beerinfo.name}</h2>

        {/**
 *

        <Fancybox options={{ infinite: false }}>
          <p>
            <button
              data-fancybox="gallery"
              data-src="https://lipsum.app/id/1/800x600"
              className="button button--secondary"
            >
              Image #1
            </button>

            <button
              data-fancybox="gallery"
              data-src="https://lipsum.app/id/2/800x600"
              className="button button--secondary"
            >
              Image #2
            </button>
          </p>
        </Fancybox>
*/}
        {/*
        <Lightbox
          images={[
            {
              src:
                'https://pivkarta.ru/images/slider_thumb/13/91/06/86/12/70/75/f3dbcf201757c0bd5eb92876d5133a45.jpg',
            },
          ]}
        />
 */}
        <ImageList cols={4} rowHeight={450}>
          {beerinfo.gallery?.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any | undefined, index: React.Key | null | undefined) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${
                    'https://pivkarta.ru/' + imageFormats(item, 'slider_thumb')
                  }`}
                  alt={beerinfo.name ? beerinfo.name : ''}
                  loading="lazy"
                />
              </ImageListItem>
            )
          )}
        </ImageList>
      </Paper>

      <BeerPlaces beerid={beerId} />
    </>
  )
}

export default BeerPage
