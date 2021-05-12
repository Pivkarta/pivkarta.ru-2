import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Link from 'next/link'

import { AppContext } from 'src/pages/_App/Context'
import {
  DropdownMenuStyled,
  DropdownMenuBoxStyled,
  MainMenuStyled,
} from './styles'

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

  const citiesList = useMemo<JSX.Element | null>(() => {
    //const coordsUrl = ''

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
              style={{
                color: '#000',
              }}

              // onClick={closeMenu}
            >
              {name}
            </a>
          </Link>
        </li>
      )
    })

    //const citiesOpened = false

    return (
      (mainCity && citiesList && citiesList.length && (
        <DropdownMenuBoxStyled>
          <a
            //href={`/city/${coordsUrl}`}
            onClick={toggleMenuCities}
            title="Пивная карта по городам"
          >
            {mainCity.name} <i className="fa fa-angle-down"></i>
          </a>
          <DropdownMenuStyled opened={citiesOpened}>
            {citiesList}
          </DropdownMenuStyled>
        </DropdownMenuBoxStyled>
      )) ||
      null
    )
  }, [cities, mainCity, citiesOpened, toggleMenuCities])

  // TODO Remove
  citiesList





  const DropdownMenu: React.FC<DropdownMenuProps> = ({
    name,
    href,
    title,
    children,
    ...other
  }) => {
  
    /**
     * Здесь вся логика с citiesOpened, toggleMenuCities и т.п.
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
   
     const citiesList = useMemo<JSX.Element | null>(() => {
       //const coordsUrl = ''
   
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
                 style={{
                   color: '#000',
                 }}
   
                 // onClick={closeMenu}
               >
                 {name}
               </a>
             </Link>
           </li>
         )
       })
   
  
    return <DropdownMenuStyled
      {...other}
    >
      <a
        href={href}
        title={title}
        onClick={toggleMenuCities}
      >
        {name} <i className="fa fa-angle-down"></i>
      </a>
      <DropdownMenuBoxStyled opened={citiesOpened}>
        {children}
      </DropdownMenuBoxStyled>
    </DropdownMenuStyled>
    },[])
  








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

        {citiesList}


        <DropdownMenu
          name={name}
          href={href}
          title={title}
          
        >
          {citiesList}
        </DropdownMenu>

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
  }, [opened, citiesList, toggleMenu])
}

export default MainMenu
