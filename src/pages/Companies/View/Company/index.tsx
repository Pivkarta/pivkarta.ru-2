import React, { useMemo } from 'react'
import Link from 'src/components/ui/Link'
import Paper from 'src/components/ui/Paper'
import Title from 'src/components/ui/Title'
import { imageFormats } from 'src/helpers/imageFormats'
import SchedulesList from '../../Company/View/WorkTime/SchedulesList'
import { CompaniesViewCompanyProps } from './interfaces'
import { CompaniesViewCompanyStyled } from './styles'

/**
 * Карточка компаний в списке компаний
 */
const CompaniesViewCompany: React.FC<CompaniesViewCompanyProps> = ({
  company,
}) => {
  return useMemo(() => {
    return (
      <CompaniesViewCompanyStyled>
        <Paper>
          <div className="imageWrapper">
            <Link href={company.uri || '/'}>
              <img
                src={
                  'https://pivkarta.ru/' +
                    (company.image &&
                      imageFormats(company.image, 'place_avatar')) || undefined
                }
                className="company--image"
                alt={company.name}
              />
            </Link>
          </div>

          <div className="content">
            <Link href={company.uri || '/'}>
              <Title>{company.name}</Title>
            </Link>

            {company.address}

            {(company.schedules && (
              <SchedulesList
                Schedules={company.schedules}
                showOffDates={false}
              />
            )) ||
              null}
          </div>
        </Paper>
      </CompaniesViewCompanyStyled>
    )
  }, [company])
}

export default CompaniesViewCompany
