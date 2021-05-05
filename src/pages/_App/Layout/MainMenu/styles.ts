import { minWidth } from 'src/theme/helpers'
import styled, { css } from 'styled-components'

export type MainMenuStyledProps = {
  opened: boolean
}

export type DropdownMenu = {
  /**
   * Открыто или закрыто
   */
  opened: boolean
}

export const DropdownMenu = styled.ul<DropdownMenu>`
  overflow: auto;
  position: absolute;
  background: #fff;
  list-style: none;
  padding-inline-start: 15px;
  max-height: 60vh;

  ${({ opened }) => {
    if (opened) {
      return css`
        display: block;
      `
    } else {
      return css`
        display: none;
      `
    }
  }}
`

export const DropdownMenuBox = styled.li`
  list-style: none;
  margin-left: 50px;
  margin-top: 7px;
`

export const MainMenuStyled = styled.div<MainMenuStyledProps>`
  background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
  background-repeat: no-repeat;
  border-bottom: 1px solid #178acc;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;

  a {
    color: white;

    &:hover {
      color: white;
    }
  }

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .separator {
    flex: 1;
  }

  .navbar-brand {
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 600;

    img {
      height: 36px;
    }
  }

  ${DropdownMenu} {
    max-height: 70vh;
  }

  ul#navbar-main {
    margin: 0;
    padding: 0;
    align-items: center;

    ${({ opened }) => {
      if (opened) {
        return css`
          display: flex;
          width: 100%;
          /* padding: 10px 0; */
        `
      } else {
        return css`
          display: none;
        `
      }
    }}

    ${minWidth.sm(css`
      width: auto;
      display: flex;
      margin-right: 10px;
    `)}

    > li {
      list-style: none;

      a {
        padding: 10px 10px;
        display: block;

        &:hover {
          background: #178acc;
        }
      }
    }
  }

  .navbar-toggle {
    position: relative;
    margin-right: 15px;
    padding: 5px 10px;
    background-color: transparent;
    background-image: none;
    border: 1px solid #178acc;
    border-radius: 4px;
    cursor: pointer;

    ${({ opened }) => {
      if (opened) {
        return css``
      }
    }}

    ${minWidth.sm(css`
      display: none;
    `)}
    
    .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      background-color: #fff;
      margin: 4px auto;
    }
  }
`
