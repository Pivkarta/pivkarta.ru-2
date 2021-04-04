import styled from 'styled-components'

import icon from './mapIcon.svg'

export const SimpleMarkerStyled = styled.div`
  background-image: url('${icon}');
  position: absolute;
  cursor: pointer;
  width: 49px;
  height: 64px;
  top: -64px;
  left: -24.5px;
  transform-origin: 24.5px 64px;
  margin: 0;
  padding: 0;
`
