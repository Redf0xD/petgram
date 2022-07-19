import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  overflow: hidden;
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
`
