import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
import Pagination from 'src/components/ui/Pagination'
import CompaniesViewCompany from './Company'
import { CompaniesViewProps } from './interfaces'
import { CompaniesViewStyled } from './styles'

const CompaniesView: React.FC<CompaniesViewProps> = ({
  companies,
  city,
  pagination,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <CompaniesViewStyled {...other}>
          {city ? (
            <p>
              Данные показаны относительно города {city.pagetitle}.{' '}
              <Link href="/city">
                <a title="Смотреть бани в других городах">Выбрать город</a>
              </Link>
            </p>
          ) : null}
          <Grid container>
            {companies.map((n) => {
              return n ? (
                <Grid key={n.id} item xs={12} sm={6} md={4} lg={3}>
                  <CompaniesViewCompany company={n} />
                </Grid>
              ) : null
            })}
          </Grid>
        </CompaniesViewStyled>

        {pagination ? <Pagination {...pagination} /> : null}
      </>
    )
  }, [city, companies, other, pagination])
}

export default CompaniesView
