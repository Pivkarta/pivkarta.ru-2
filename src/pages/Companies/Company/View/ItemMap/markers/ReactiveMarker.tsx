/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import compose from 'recompose/compose'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/distinctUntilChanged'
import SimpleMarker from './SimpleMarker'

import stream2Props from 'google-map-react/develop/markers/stream2Props'

// import defaultProps from 'recompose/defaultProps';
// import reactiveMarkerStyles from './reactiveMarker.scss';

export const reactiveMarker = (props: any) => <SimpleMarker {...props} />

export const reactiveMarkerHOC = compose(
  stream2Props(({ id, hoveredMarkerId$ }: any) =>
    hoveredMarkerId$
      .map((hoveredMarkerId: string) => hoveredMarkerId === id)
      .distinctUntilChanged()
      .map((v: any) => ({ hovered: v }))
  )
)

export default reactiveMarkerHOC(reactiveMarker)
