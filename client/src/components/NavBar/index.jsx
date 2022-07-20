import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { UserContext } from '../../Context/User/UserContext'
const SIZE = '32px'
export const NavBar = () => {
  const { isAuth } = useContext(UserContext)
  const { pathname } = useLocation()
  let path = '/user'

  if (pathname === '/register') path = '/register'
  else if (pathname === '/login') path = '/login'
  else path = '/user'

  return (
    <Nav>
      <Link to={'/'}>
        <MdHome size={SIZE} />
      </Link>
      {isAuth && (
        <Link to="/favs">
          <MdFavoriteBorder size={SIZE} />
        </Link>
      )}
      <Link to={path}>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  )
}
