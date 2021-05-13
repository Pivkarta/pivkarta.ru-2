import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DropdownMenuProps } from './interfaces'
import { DropdownMenuStyled, DropdownMenuItemStyled } from './styles'

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
        <DropdownMenuStyled {...other}>
          <a
            //href={`/city/${coordsUrl}`}
            onClick={toggleMenuCities}
            title={title}
          >
            {name} <i className="fa fa-angle-down"></i>
          </a>
          <DropdownMenuItemStyled opened={citiesOpened}>
            {children}
          </DropdownMenuItemStyled>
        </DropdownMenuStyled>
      )) ||
      null
    )
  }, [children, citiesOpened, name, other, title, toggleMenuCities])
}

export default DropdownMenu
