import { AUTH } from './types'

export const UserReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case AUTH:
      return {
        ...state,
        isAuth: payload
      }
  }
}
