import React, { useReducer } from 'react'
import { UserContext } from './UserContext.jsx'
import { UserReducer } from './UserReducer.jsx'
import { AUTH } from './types'

export const UserProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    isAuth: window.sessionStorage.getItem('token')
  }
  const [state, dispatch] = useReducer(UserReducer, initialState)
  ///funciones que modifican estados
  const setAuth = token => {
    dispatch({
      type: AUTH,
      payload: token
    })
    window.sessionStorage.setItem('token', token)
  }

  return (
    <div>
      <UserContext.Provider value={{ isAuth: state.isAuth, setAuth }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
