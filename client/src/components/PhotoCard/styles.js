import styled from 'styled-components'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
`
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Button = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  & svg{
    margin-right: 4px;
  }
`
