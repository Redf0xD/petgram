import { useLocation } from 'react-router-dom'
import { Link, Text } from './styles'
export const LoginOrRegisterBtn = () => {
  const { pathname } = useLocation()
  return (
    <>
      {pathname === '/register' ? (
        <Text>
          ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión.</Link>
        </Text>
      ) : (
        <Text>
          ¿Aún no tienes cuenta? <Link to="/register">Crea una cuenta.</Link>
        </Text>
      )}
    </>
  )
}
