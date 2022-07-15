import { Category } from '../Category'
import { List, Items } from './styles'
import { categories } from '../../../../api/db.json'
export const ListOfCategory = () => {
  return (
    <List>
      {categories.map((category) => (
        <Items key={category.id}>
          <Category {...category} />
        </Items>
      ))}
    </List>
  )
}
