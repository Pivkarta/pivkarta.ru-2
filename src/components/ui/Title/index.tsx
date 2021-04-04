import React from 'react'
import { TitleProps } from './interfaces'
import { TitleStyled } from './styles'

const Title: React.FC<TitleProps> = ({
  children,
  variant = 'h3',
  ...other
}) => {
  return (
    <TitleStyled as={variant} {...other}>
      {children}
    </TitleStyled>
  )
}

export default Title
