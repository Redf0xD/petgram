import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useInputValue } from '../../customHooks/useInputValue'
import { LoginOrRegisterBtn } from '../LoginOrRegisterBtn'
import { useRegisterMutation } from '../../customHooks/useRegisterMutation'
import { useLoginMutation } from '../../customHooks/useLoginMutation'
import { LogoForm } from '../LogoForm'
import { Form, Input, Logo, Error } from './styles.js'
import { UserContext } from '../../Context/User/UserContext'
import { FaPaw } from 'react-icons/fa'
import { SubmitButton } from '../SubmitButton'

export const UserForm = () => {
  const { activeAuth } = useContext(UserContext)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const {
    registerMutation,
    error: registerError,
    loading: registerLoading
  } = useRegisterMutation()

  const {
    loginMutation,
    error: loginError,
    loading: loginLoading
  } = useLoginMutation()

  let msgError =
    pathname === '/register' ? registerError?.message : loginError?.message
  const loading = pathname === '/register' ? registerLoading : loginLoading
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    const input = { email: email.value, password: password.value }
    const variable = { input }
    pathname === '/register'
      ? registerMutation({ variables: variable }).then(({ data }) => {
          const { signup } = data
          activeAuth(signup)
          navigate('/user', { replace: true })
        })
      : loginMutation({ variables: variable }).then(({ data }) => {
          const { login } = data
          activeAuth(login)
          navigate('/user', { replace: true })
        })
    if (!registerError && !loginError) msgError = ''
  }

  const btnText =
    pathname === '/register' ? 'Crear una cuenta' : 'Iniciar Sesión'

  return (
    <Form onSubmit={handleSubmit} submit={loading}>
      <Logo>
        <LogoForm />
      </Logo>
      <Input type="text" disabled={loading} placeholder="email" {...email} />
      <Input
        type="password"
        disabled={loading}
        placeholder="password"
        {...password}
      />
      {msgError && (
        <Error>
          <FaPaw /> <span>{msgError}</span>
        </Error>
      )}
      <SubmitButton disabled={loading}>{btnText}</SubmitButton>
      <LoginOrRegisterBtn />
    </Form>
  )
}
