/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useCallback, useMemo, useState } from 'react'

// import GoogleMap from 'material-ui-components/src/GoogleMap';
// import GoogleMap from 'modules/Sportpoisk/components/GoogleMap';

// import Grid from '@material-ui/core/Grid';

// import Helper from 'modules/Site/components/Helper';

// import Control from './Controls';
// import Control from 'modules/Sportpoisk/components/GoogleMap/Controls/layout';
import Control from 'google-map-react-control'

// const Control = require('google-map-react-control');

// TODO Restore YandexSearch
// import YandexSearch from 'modules/Site/components/YandexMap/Search';

import GoogleMapReact from 'google-map-react'
// import SimpleMarker from 'google-map-react/develop/markers/SimpleMarker';
import SimpleMarker from './markers/SimpleMarker'

// const defaultProps = {}

// import SearchControl from 'modules/Sportpoisk/components/GoogleMap/Controls/UserMenu/index.js';

// export {Control};

import {
  StaticGoogleMap,
  Marker,
  // Path,
} from 'react-static-google-map'
import { ItemMapProps } from './interfaces'
import { CardContent, Paper } from '@material-ui/core'

const ItemMap: React.FC<ItemMapProps> = ({
  item,
  // updateItem,
  fullMap: fullMapProps = false,
}) => {
  // eslint-disable-next-line no-restricted-modules
  // const SimpleMarker = require('google-map-react/develop/markers/SimpleMarker');

  // constructor(props: ItemMapProps) {

  //   super(props);

  //   const {
  //     fullMap = false,
  //   } = props;

  //   this.state = {
  //     ...this.state,
  //     : true,
  //     ,
  //   }
  // }

  const [draggable, draggableSetter] = useState(true)
  const [fullMap, fullMapSetter] = useState(fullMapProps)
  const [map, mapSetter] = useState<unknown | null>(null)
  const [maps, mapsSetter] = useState<unknown | null>(null)

  const inEditMode = useCallback(() => {
    // const {
    //   item: {
    //     _isDirty,
    //   },
    // } = this.props;

    // return _isDirty ? true : false;

    return false
  }, [])

  const onChildMouseDown: GoogleMapReact.Props['onChildMouseDown'] = useCallback(() => {
    if (!inEditMode()) {
      return
    }

    draggableSetter(false)

    return
  }, [inEditMode])

  const onChildMouseUp: GoogleMapReact.Props['onChildMouseUp'] = useCallback(() => {
    if (!inEditMode()) {
      return
    }

    draggableSetter(true)
  }, [inEditMode])

  // TODO Restore
  const onChildMouseMove: GoogleMapReact.Props['onChildMouseMove'] = useCallback(
    (_key, _marker, _newCoords) => {
      // if (!this.inEditMode()) {
      //   return;
      // }
      // const {
      //   item,
      //   updateItem,
      //   onChange,
      // } = this.props;
      // const data = {
      //   coords: newCoords,
      //   ...newCoords,
      // };
      // updateItem(item, data);
      // onChange && onChange(item, data);
      // this.forceUpdate();
    },
    []
  )

  const onGoogleApiLoaded: GoogleMapReact.Props['onGoogleApiLoaded'] = useCallback(
    (api) => {
      const { map, maps } = api

      mapSetter(map)
      mapsSetter(maps)

      // this.setState({
      //   map,
      //   maps,
      // });
    },
    []
  )

  // const {
  //   fullMap,
  // } = this.state;

  const onClick = useCallback(() => {
    // this.setState({
    //   fullMap: true,
    // });
    fullMapSetter(true)
  }, [])

  const { name, lat, lng } = item

  const content = useMemo(() => {
    if (!lat || !lng) {
      return null
    }

    if (!fullMap || typeof window === 'undefined') {
      // return null;

      return (
        <div
          style={{
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onClick={onClick}
        >
          <StaticGoogleMap
            apiKey="AIzaSyDrAAFNMwCrJRoF_D_JlCZ34AK30X-nha0"
            size="600x400"
          >
            <Marker
              // color="blue"
              label={(name && name.substr(0, 1)) || undefined}
              location={{ lat, lng }}
            />
          </StaticGoogleMap>
        </div>
      )
    } else {
      return (
        <div
          style={{
            height: 400,
          }}
        >
          <GoogleMapReact
            // ref="GoogleMapReact"
            apiKey="AIzaSyDrAAFNMwCrJRoF_D_JlCZ34AK30X-nha0"
            defaultCenter={{
              lat: lat,
              lng: lng,
            }}
            center={
              (draggable && {
                lat: lat,
                lng: lng,
              }) ||
              undefined
            }
            defaultZoom={15}
            draggable={draggable}
            onChildMouseDown={onChildMouseDown}
            onChildMouseUp={onChildMouseUp}
            onChildMouseMove={onChildMouseMove}
            onGoogleApiLoaded={onGoogleApiLoaded}
            options={{
              fullscreenControl: false,
              // @ts-ignore
              overviewMapControl: false,
              streetViewControl: true,
              rotateControl: true,
              mapTypeControl: true,
              // disable poi
              styles: [
                {
                  featureType: 'poi',
                  elementType: 'labels',
                  stylers: [{ visibility: 'off' }],
                },
              ],
            }}
          >
            <SimpleMarker lat={lat} lng={lng} map={map}></SimpleMarker>
          </GoogleMapReact>

          {/* {
            map && maps
              ?
              <Control
                map={map}
                maps={maps}
                position="TOP_CENTER"
              >
  
                <Grid
                  container
                  gutter={0}
                  align="center"
                >
  
                  <Grid
                    item
                    xs
                  >
  
                    <YandexSearch
                      map={map}
                      maps={maps}
                      style={{
                        minWidth: 300
                      }}
                      error={error || false}
                      textFieldProps={{
                        helperText: helperText || undefined,
                        onFocus,
                      }}
                      onNewRequest={(event, value, mapItem) => {
                        const {
                          coordinates: {
                            0: lat,
                            1: lng,
                          },
                        } = mapItem;
  
                        const data = {
                          lat,
                          lng,
                          coords: {
                            lat,
                            lng,
                          },
                        };
  
                        updateItem(item, data);
  
                      }}
                    />
  
                  </Grid>
  
                  {helper
                    ?
                    <Grid
                      item
                    >
                      <Helper
                        contrastIcons={false}
                      >
                        {helper}
                      </Helper>
                    </Grid>
                    :
                    null
                  }
  
                </Grid>
  
  
  
              </Control>
  
              :
              null
          } */}

          {map && maps ? (
            <Control
              map={map}
              maps={maps}
              position="BOTTOM_LEFT"
              style={{
                padding: 4,
              }}
            >
              {/* <a
                href="https://maps.yandex.ru"
                rel="nofollow noreferrer"
                style={{
                  color: '#fff',
                  textShadow: '0px 0px 5px #888',
                  fontSize: '16px',
                }}
                target="_blank"
              >
                Yandex.Maps
              </a> */}
            </Control>
          ) : null}
        </div>
      )
    }
  }, [
    draggable,
    fullMap,
    lat,
    lng,
    map,
    maps,
    name,
    onChildMouseDown,
    onChildMouseMove,
    onChildMouseUp,
    onClick,
    onGoogleApiLoaded,
  ])

  return content ? (
    <CardContent>
      <Paper
        style={{
          height: 400,
          position: 'relative',
        }}
      >
        {content}
      </Paper>
    </CardContent>
  ) : null
}

export default ItemMap
