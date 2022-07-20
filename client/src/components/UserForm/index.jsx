import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useInputValue } from '../../customHooks/useInputValue'
import { LoginOrRegisterBtn } from '../LoginOrRegisterBtn'
import { LogoForm } from '../LogoForm'
import { Form, Button, Input, Logo } from './styles.js'
import { UserContext } from '../../Context/User/UserContext'

export const UserForm = () => {
  const { pathname } = useLocation()
  const email = useInputValue('')
  const password = useInputValue('')
  const btnText =
    pathname === '/register' ? 'Crear una cuenta' : 'Iniciar Sesión'
  const { setAuth } = useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    setAuth(true)
    navigate("/", {replace: true}) 
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Logo>
        <LogoForm />
      </Logo>
      <Input type="text" placeholder="email" {...email} />
      <Input type="password" placeholder="password" {...password} />
      <Button>{btnText}</Button>
      <LoginOrRegisterBtn />
    </Form>
  )
}
