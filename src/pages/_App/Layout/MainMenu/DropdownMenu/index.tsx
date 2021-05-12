import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DropdownMenuProps } from './interfaces'
import { DropdownMenuBoxStyled, DropdownMenuStyled } from './styles'

/**
 * Выпадающее меню
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  name,
  title,
  ...other
}) => {
  /**
   * Открытие и закрытие городов в меню
   */

  const [citiesOpened, citiesOpenedSetter] = useState(false)

  const toggleMenuCities = useCallback(() => {
    citiesOpenedSetter(!citiesOpened)
  }, [citiesOpened])

  useEffect(() => {
    if (!citiesOpened) {
      return
    }

    const closeCitiesOpenedEvent = () => {
      citiesOpenedSetter(false)
    }

    window.document.addEventListener('click', closeCitiesOpenedEvent)

    return () => {
      window.document.removeEventListener('click', closeCitiesOpenedEvent)
    }
  }, [citiesOpened])

  return useMemo(() => {
    return (
      (children && (
        <DropdownMenuBoxStyled {...other}>
          <a
            //href={`/city/${coordsUrl}`}
            onClick={toggleMenuCities}
            title={title}
          >
            {name} <i className="fa fa-angle-down"></i>
          </a>
          <DropdownMenuStyled opened={citiesOpened}>
            {children}
          </DropdownMenuStyled>
        </DropdownMenuBoxStyled>
      )) ||
      null
    )
  }, [children, citiesOpened, name, other, title, toggleMenuCities])
}

export default DropdownMenu
