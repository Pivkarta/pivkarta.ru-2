import styled from 'styled-components'

export const ScheduleStyled = styled.div`
  .schedule--title {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 3px;
      display: block;

      > :nth-child(2) {
        transform: scale(0.75);
        margin-left: -2px;
        margin-bottom: 6px;
      }
    }
  }
`
