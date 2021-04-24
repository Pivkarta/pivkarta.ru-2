import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Link from 'next/link'

import { AppContext } from 'src/pages/_App/Context'
import { MainMenuStyled } from './styles'

//import logo from './img/bath-logo.png'
import logo from './img/pivkarta-logo.png'

const MainMenu: React.FC = () => {
  const context = useContext(AppContext)

  /**
   * Формируем список городов с сортировкой
   */
  const { cities, mainCity } = useMemo(() => {
    const cities = context?.appData?.cities ?? []

    const mainCity = cities[0]

    return {
      cities,
      mainCity,
    }
  }, [context?.appData?.cities])

  const baseUrl = '/'

  const citiesList = useMemo<JSX.Element | null>(() => {
    const coordsUrl = ''

    const citiesList: JSX.Element[] = []

    cities.forEach((city) => {
      if (!city) {
        return
      }

      const { id, name, lat, lng, alias: uri } = city

      if (!lat || !lng) {
        return
      }

      const link = `/${uri}@` + [lat, lng, 12].join(',')

      citiesList.push(
        <li key={id}>
          <Link href={link}>
            <a
            // onClick={closeMenu}
            >
              {name}
            </a>
          </Link>
        </li>
      )
    })

    const citiesOpened = false

    return (
      (mainCity && citiesList && citiesList.length && (
        <li>
          <a
            href={`/city/${coordsUrl}`}
            title="Бани в городах"
            className="dropdown-toggle"
            data-toggle="dropdown"
          >
            {mainCity.name} <i className="fa fa-angle-down"></i>
          </a>
          <ul
            className="dropdown-menu"
            style={{
              display: citiesOpened ? 'block' : undefined,
              maxHeight: '70vh',
              overflow: 'auto',
            }}
          >
            {citiesList}
          </ul>
        </li>
      )) ||
      null
    )
  }, [cities, mainCity])

  // TODO Remove
  citiesList

  const [opened, openedSetter] = useState(false)

  const toggleMenu = useCallback(() => {
    openedSetter(!opened)
  }, [opened])

  /**
   * Ивент на закрытие меню
   */
  useEffect(() => {
    if (!opened) {
      return
    }

    const closeEvent = () => {
      openedSetter(false)
    }

    window.document.addEventListener('click', closeEvent)

    return () => {
      window.document.removeEventListener('click', closeEvent)
    }
  }, [opened])

  return useMemo(() => {
    return (
      <MainMenuStyled opened={opened}>
        <Link href={baseUrl}>
          <a className="navbar-brand" title="Пивная карта, главная страница">
            <img src={logo} alt={'logo'} title="Пивная карта" />
            <span className="str">Пивная карта</span>
          </a>
        </Link>

        <div className="separator" />

        <button className="navbar-toggle" type="button" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <ul id="navbar-main">
          <li className="last">
            <Link href="/contacts">
              <a title="Контакты">Контакты</a>
            </Link>
          </li>
        </ul>
      </MainMenuStyled>
    )
  }, [opened, toggleMenu])
}

export default MainMenu
