import styled from 'styled-components'
import { LinkStyled } from '../styles'

export const UserLinkStyled = styled.span`
  ${LinkStyled} {
    display: flex;
    align-items: center;

    img.avatar {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      margin-right: 2px;
    }
  }
`
