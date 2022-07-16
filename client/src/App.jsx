import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategory />
      <ListOfPhotoCard />
    </>
  )
}

export default App
