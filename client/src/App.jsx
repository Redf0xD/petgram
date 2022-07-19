import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
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
      </Routes>
    </>
  )
}

export default App
