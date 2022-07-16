import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategory />
      <ListOfPhotoCard />
    </>
  )
}

export default App
