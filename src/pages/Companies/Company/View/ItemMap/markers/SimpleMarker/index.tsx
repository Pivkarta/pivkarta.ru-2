/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'
// import getContext from 'recompose/getContext';
// import mapPropsOnChange from 'recompose/mapPropsOnChange';
import { Motion } from 'react-motion'
import { clusterMarkerHOC } from '../ClusterMarker'
import { SimpleMarkerProps } from './interfaces'
import { SimpleMarkerStyled } from './styles'

// import simpleMarkerStyles from './SimpleMarker.sass';

const simpleMarkerStyles = {}

export const SimpleMarker: React.FC<SimpleMarkerProps> = (
  {
    // styles,
    hovered,
    $hover,
    defaultMotionStyle,
    motionStyle,
  }: // hello,
  any // console.log('hello', hello),
) => (
  <Motion defaultStyle={defaultMotionStyle} style={motionStyle}>
    {({ scale }) => (
      <SimpleMarkerStyled
        style={{
          transform: `translate3D(0,0,0) scale(${scale}, ${scale})`,
          zIndex: hovered || $hover ? 1 : 0,
        }}
      />
    )}
  </Motion>
)

export const simpleMarkerHOC = compose<any, SimpleMarkerProps>(
  defaultProps({
    styles: simpleMarkerStyles,
    initialScale: 0.6,
    defaultScale: 0.6,
    hoveredScale: 0.7,
  }),
  // getContext({
  //   hello: PropTypes.string,
  // }),
  // resuse HOC
  clusterMarkerHOC
)

export default simpleMarkerHOC(SimpleMarker)
