import styled, { css } from 'styled-components'
import { FadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props =>
    props.fixed &&
    css`
       {
        ${FadeIn({ time: '0.5s' })}
        position: sticky;
        top: -20px;
        left: 0;
        right: 0;
        z-index: 1;
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        padding: 8px;
        margin: 0 auto;
        transform: scale(0.6);
      }
    `}
`

export const Items = styled.li`
  padding: 0 8px;
`
