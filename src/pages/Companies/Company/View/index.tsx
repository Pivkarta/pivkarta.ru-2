import React, { useMemo } from 'react'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { CompanyViewProps } from './interfaces'
// import SchedulesList from './SchedulesList'
import GallerySlider from './GallerySlider'
import { imageFormats } from 'src/helpers/imageFormats'
import { Card, CardHeader } from '@material-ui/core'
import Site from './Site'

import Editor from '@prisma-cms/editor'
// import ReactDecliner from 'react-decliner';

import dynamic from 'next/dynamic'
import CompanyWorkTime from './WorkTime'
import { CompanyViewStyled } from './styles'

import SvgIcon from 'src/components/ui/SvgIcon'
import addressSvg from './img/address.svg'
import priceSvg from './img/price.svg'
import metroSvg from './img/metro.svg'
import siteSvg from './img/site.svg'
import phoneSvg from './img/phone.svg'
// import Title from 'src/components/ui/Title'
// import CommentsPageView from 'src/pages/Comments/View'

const ItemMap = dynamic(import('./ItemMap'), {
  ssr: false,
})

// import moment from 'moment'

const CompanyView: React.FC<CompanyViewProps> = ({ company, ...other }) => {
  const {
    // id,
    // id: companyId,
    name,
    // uri,
    // imageFormats: image,
    image,
    gallery,
    // TemplateVarValues: tvs,
    content: itemContent,
    // city,
    // createdon,
    // createdby,
    // coords,

    // TODO: Fix comments
    // comments,

    // editedon,
    // editVersions,
    // schedule,
    // schedule_men,
    // schedule_women,
    // schedule_family,

    // prices,
    metro,
    phone,

    // _errors: errors,
    // _isDirty,
    // } = company;
    address,
    site,
  } = useMemo(() => {
    return company
  }, [company])

  const prices = useMemo(() => {
    return []
  }, [])

  return useMemo(() => {
    // const {
    //   metro,
    //   phone,
    //   // prices,
    //   approved,
    // } = tvs || {}

    // const inEditMode = _isDirty ? true : false
    const inEditMode = false

    // const canEdit = typeof window !== 'undefined'
    // const canEdit = false

    // const editDate = editedon || createdon

    const addresses: JSX.Element[] = []

    if (address) {
      addresses.push(<span key="address">{address}</span>)
    }

    // TODO Fix
    const Gallery =
      (gallery && gallery.length && (
        <CardContent
          style={{
            paddingBottom: 40,
          }}
        >
          <GallerySlider gallery={gallery} />
        </CardContent>
      )) ||
      null

    // Gallery = inEditMode
    //   ? null
    //   : (gallery && gallery.length && (
    //     <CardContent
    //       style={{
    //         paddingBottom: 40,
    //       }}
    //     >
    //       <GallerySlider gallery={gallery} />
    //     </CardContent>
    //   )) ||
    //   ''

    // TODO Fix edit Versions
    // let editVersionsList
    // if (
    //   editVersions &&
    //   editVersions.filter((n) => n.status === '0').length &&
    //   inEditMode
    // ) {
    //   editVersionsList = (
    //     <div>
    //       {diffs ? (
    //         <Button
    //           onClick={(event) => {
    //             this.setState({
    //               diffs: null,
    //             })
    //           }}
    //           raised
    //           accent
    //         >
    //           Отменить изменения и показать оригинал
    //         </Button>
    //       ) : null}

    //       {typeof window !== 'undefined' ? (
    //         <EditVersions
    //           companyId={companyId}
    //           // previewDiffs={::this.previewDiffs}
    //           // acceptDiffs={::this.acceptDiffs}
    //           diffs={diffs}
    //           activeOnly={true}
    //         />
    //       ) : null}
    //     </div>
    //   )
    // } else {
    //   editVersionsList = (
    //     <div>
    //       <Link
    //         to="/edits"
    //         href="/edits"
    //         rel="nofollow"
    //         className="flex align-center"
    //       >
    //         <ListIcon color="#F57C00" /> Лента изменений
    //       </Link>
    //     </div>
    //   )
    // }

    // const editDateInfo =
    //   (id > 0 && (
    //     <Grid
    //       company
    //       xs={12}
    //       style={{
    //         marginTop: 15,
    //       }}
    //     >
    //       <b>Дата последнего редактирования: </b>{' '}
    //       {editDate && moment(editDate * 1000).format('DD-MM-YYYY')}
    //       {editVersionsList}
    //     </Grid>
    //   )) ||
    //   null

    const mainInfo = (
      <CardContent key="mainInfo">
        <Paper
          style={{
            padding: 15,
          }}
        >
          <Grid container spacing={1}>
            <Grid item>
              {image ? (
                <img
                  alt={company.name}
                  src={imageFormats(image, 'thumb')}
                  style={{
                    cursor: 'pointer',
                    marginRight: 10,
                    marginBottom: 10,
                  }}
                />
              ) : null}

              {/* {inEditMode ? (
                <div>
                  <ImagesUploader
                    label={
                      image ? 'Заменить изображение' : 'Загрузить изображение'
                    }
                    multiple={false}
                    dataName="file[]"
                    url="/assets/components/modxsite/connectors/connector.php?pub_action=images/upload"
                    optimisticPreviews
                    onLoadEnd={(err, response) => {
                      if (err && err.message) {
                        const { message } = err.response || {}

                        documentActions.addInformerMessage(
                          message || 'Ошибка загрузки файла'
                        )
                      } else {
                        const { 0: image } = response.object || {}

                        if (image && image.url) {
                          this.updateItem(company, {
                            image: image.url,
                            imageFormats: {
                              thumb: '/images/resized/thumb/' + image.url,
                            },
                          })

                          this.clearErrors('image')
                        }

                        return
                      }
                    }}
                  />

                  {errors && errors.image ? (
                    <p
                      style={{
                        color: 'red',
                      }}
                    >
                      {errors.image}
                    </p>
                  ) : null}
                </div>
              ) : null} */}
            </Grid>

            <Grid item xs={12} sm>
              {inEditMode ? null : addresses.length ? ( // /> //   onFocus={() => this.onFocus('address')} //   onChange={this.onChange} //   value={address || ''} //   name="address" //   } //     (errors && errors.address) || 'Укажите подробный адрес' //   helperText={ //   error={errors && errors.address ? true : false} //   label="Адрес" // <TextField
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  <SvgIcon src={addressSvg} alt="Адрес" />{' '}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Адрес:
                  </span>{' '}
                  {addresses.reduce<React.ReactNode[]>(
                    (curr, next) =>
                      !curr.length ? [next] : [curr, ', ', next],
                    []
                  )}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? null : metro ? ( // /> //   onFocus={() => this.onFocus('metro')} //   onChange={this.onChange} //   value={metro || ''} //   name="metro" //   helperText="Укажите ближайшие станции метро через запятую" //   label="Метро" // <TextField // TODO Restore metro
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  <SvgIcon src={metroSvg} alt="metro" />
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Метро:
                  </span>{' '}
                  {metro}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? null : phone ? ( // /> //   onFocus={() => this.onFocus('phone')} //   onChange={this.onChange} //   value={phone || ''} //   name="phone" //   helperText="Можно указать несколько телефонов через запятую" //   label="Телефон" // <TextField
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  <SvgIcon src={phoneSvg} alt="phone" />{' '}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Телефон:
                  </span>{' '}
                  {phone
                    .split(/,|;/)
                    .map((n) => n && n.trim())
                    .filter((n) => n)
                    .map((phone, index) => {
                      return phone && phone.length > 8 ? (
                        <a key={index} href={`tel:${phone}`}>
                          {phone}
                        </a>
                      ) : (
                        phone
                      )
                    })
                    .reduce<React.ReactNode[]>(
                      (curr, next) =>
                        !curr.length ? [next] : [curr, ', ', next],
                      []
                    )}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? null : site ? ( // /> //   onFocus={() => this.onFocus('site')} //   onChange={this.onChange} //   value={site || ''} //   name="site" //   helperText="Если адрес начинается с https, обязательно укажите вместе с ним, например, https://ваш_сайт/" //   label="Сайт" // <TextField
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  <SvgIcon src={siteSvg} alt="site" />{' '}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Сайт:
                  </span>{' '}
                  <Site
                    site={site}
                    // TODO Fix approved
                    approved={false}
                  />
                </Grid>
              ) : (
                ''
              )}

              <CompanyWorkTime company={company} />

              {prices ? (
                <div
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <Grid container alignItems="center">
                    <SvgIcon src={priceSvg} alt="Цена" />{' '}
                    <span
                      style={{
                        paddingLeft: 5,
                        paddingRight: 3,
                      }}
                    >
                      Цены
                    </span>
                  </Grid>

                  {prices}
                </div>
              ) : null}
            </Grid>

            {/* {editDateInfo} */}
          </Grid>
        </Paper>
      </CardContent>
    )

    return (
      <CompanyViewStyled {...other}>
        <Card
          style={{
            boxShadow: 'none',
          }}
        >
          {/* {id < 0 ? (
          <CardContent
            style={{
              display: 'flex',
            }}
          >
            <WarningIcon
              color="#F57C00"
              style={{
                height: 26,
                width: 26,
                flex: 'none',
                marginRight: 5,
              }}
            />{' '}
            <span
              style={{
                fontSize: '16px',
              }}
            >
              Размещение информации о банных заведениях на портале "Городские
              бани" бесплатное. Подробнее{' '}
              <Link
                to="/topics/obnovlennaya-versiya-portala-gorodskix-ban-1641.html"
                href="/topics/obnovlennaya-versiya-portala-gorodskix-ban-1641.html"
              >
                читайте здесь
              </Link>
            </span>
            .
          </CardContent>
        ) : null} */}

          <CardHeader
            title={
              <Grid container alignItems="center">
                <Grid item xs={12} sm>
                  {inEditMode
                    ? // <TextField
                      //   label="Название заведения"
                      //   error={errors && errors.name ? true : false}
                      //   helperText={(errors && errors.name) || ''}
                      //   name="name"
                      //   value={name || ''}
                      //   onChange={this.onChange}
                      //   onFocus={() => this.onFocus('name')}
                      // />
                      null
                    : name}
                </Grid>

                {/* {_isDirty ? (
                <Grid company>
                  <IconButton
                    onClick={(event) => {
                      this.saveItem()
                    }}
                    disabled={sending}
                  >
                    <SaveIcon color="red" />
                  </IconButton>

                  {helper}
                </Grid>
              ) : canEdit ? (
                <Grid company>
                  <IconButton
                    onClick={(event) => {
                      this.updateItem(company, {})
                    }}
                  >
                    <EditIcon
                    // color="red"
                    />
                  </IconButton>

                  {helper}
                </Grid>
              ) : null} */}
              </Grid>
            }

            // TODO Restore RatingField
            // subheader={<RatingField company={company} />}
          />

          {mainInfo}

          {itemContent ? (
            <CardContent>
              <Paper
                style={{
                  padding: 15,
                }}
                // dangerouslySetInnerHTML={{ __html: itemContent }}
              >
                <Editor editorKey="content" value={itemContent} />
              </Paper>
            </CardContent>
          ) : null}

          <ItemMap item={company} />

          {Gallery}

          {/* {!inEditMode && company.Comments?.length ? (
            <CardContent>
              <Paper
                style={{
                  padding: 15,
                }}
              >

                <CommentsPageView
                  comments={company.Comments}
                  pagination={undefined}
                />

              </Paper>
            </CardContent>
          ) : null} */}
        </Card>
      </CompanyViewStyled>
    )
  }, [
    address,
    gallery,
    image,
    company,
    itemContent,
    metro,
    name,
    other,
    phone,
    prices,
    site,
  ])
}

export default CompanyView
