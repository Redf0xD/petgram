import styled, { css } from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0 32px;
  gap: 0.5rem;
  overflow-y: auto;
  padding-bottom: 70px;
  ${prop =>
    prop.Submit &&
    css`
      opacity: 0.3;
    `}
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 4px;
  width: 100%;
`


export const Logo = styled.div`
  width: 180px;
  height: 180px;
  padding: 8px 0;
`
export const Error = styled.p`
  display: flex;
  color: #e18426;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`
