import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import {FadeIn} from '../../styles/animation'

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
`
export const Link = styled(LinkRouter)`
  color: #888;
  display: flex;
  place-content: center;
  &.active {
    color: #000;
    &::after {
      ${FadeIn({time: "0.5s"})};
      content: '·';
      font-size: 32px;
      line-height: 20px;
      position: absolute;
      bottom: 0;
      margin: 0 auto;
    }
  }
`
