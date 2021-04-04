import React, { useMemo } from 'react'
import CompaniesView from 'src/pages/Companies/View'
import { CityPageViewProps } from './interfaces'

const CityPageView: React.FC<CityPageViewProps> = ({
  city,
  companies,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <CompaniesView companies={companies} city={city} {...other} />
      </>
    )
  }, [companies, city, other])
}

export default CityPageView
