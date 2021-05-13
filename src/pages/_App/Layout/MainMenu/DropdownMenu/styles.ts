import styled, { css } from 'styled-components'

export type DropdownMenuBoxListStyledProps = {
  /**
   * Открыто или закрыто
   */
  opened: boolean
}

export const DropdownMenuBoxListStyled = styled.ul<DropdownMenuBoxListStyledProps>`
  overflow: auto;
  position: absolute;
  background: #fff;
  list-style: none;
  padding-inline-start: 15px;
  max-height: 60vh;
  box-shadow: 0 1px 4px 0px #c1b7b7;

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

export const DropdownMenuBoxStyled = styled.li`
  list-style: none;
  margin-left: 50px;
  margin-top: 7px;
`
