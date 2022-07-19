import { useContext } from 'react'
import { UserContext } from '../Context/User/UserContext'

export const NotRegisteredUser = () => {
  const { setAuth } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setAuth(true)
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>iniciar sesion</button>
    </form>
  )
}
