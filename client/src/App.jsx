import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { GlobalStyle } from './styles/GlobalStyles'
import { UserContext } from './Context/User/UserContext'

const App = () => {
  const { isAuth } = useContext(UserContext)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="pet">
            <Route path=":id" element={<Home />} />
          </Route>
        </Route>
        <Route path="detail">
          <Route path=":detailId" element={<Detail />} />
        </Route>
        <Route
          path="favs"
          element={isAuth ? <Favs /> : <NotRegisteredUser />}
        />
        <Route
          path="user"
          element={isAuth ? <User /> : <NotRegisteredUser />}
        />
      </Routes>
      <NavBar />
    </>
  )
}

export default App
