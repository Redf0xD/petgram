import React, { useReducer } from 'react'
import { UserContext } from './UserContext.jsx'
import { UserReducer } from './UserReducer.jsx'
import { useApolloClient } from '@apollo/client'
import { AUTH } from './types'

export const UserProvider = ({ children }) => {
  const client = useApolloClient()
  // Estado inicial
  const initialState = {
    isAuth: window.sessionStorage.getItem('token')
  }
  const [state, dispatch] = useReducer(UserReducer, initialState)
  ///funciones que modifican estados
  const activeAuth = token => {
    dispatch({
      type: AUTH,
      payload: token
    })
    window.sessionStorage.setItem('token', token)
  }
  const desactiveAuth = () => {
    dispatch({
      type: AUTH,
      payload: null
    })
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }
  return (
    <div>
      <UserContext.Provider
        value={{ isAuth: state.isAuth, activeAuth, desactiveAuth }}
      >
        {children}
      </UserContext.Provider>
    </div>
  )
}
