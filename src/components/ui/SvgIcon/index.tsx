import React, { useMemo } from 'react'
import { SvgIconProps } from './interfaces'
import { SvgIconStyled } from './styles'

const SvgIcon: React.FC<SvgIconProps> = ({ src, ...other }) => {
  return useMemo(() => {
    return <SvgIconStyled {...other} src={src} />
  }, [other, src])
}

export default SvgIcon
