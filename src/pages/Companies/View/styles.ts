import { PaperStyled } from 'src/components/ui/Paper/styles'
import styled from 'styled-components'
import { CompaniesViewCompanyStyled } from './Company/styles'

export const CompaniesViewStyled = styled.div`
  ${CompaniesViewCompanyStyled} {
    padding: 10px;

    > ${PaperStyled} {
      padding: 0;
      height: 100%;
    }
  }
`
