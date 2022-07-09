import { Category } from '../Category'
import { List, Items } from './styles'
export const ListOfCategory = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Items key={category}><Category /></Items>
      ))}
    </List>
  )
}
