import { Category } from '../Category'
import { List, Items } from './styles'
import { getCategories } from '../../customHooks/getCategories'
import { Fixed } from '../../customHooks/Fixed'
export const ListOfCategory = () => {
  const { categories, loading } = getCategories()
  const { isFixed } = Fixed()
  return (
    <List fixed={isFixed}>
      {loading
        ? <Items><Category /></Items>
        : categories.map((category) => (
          <Items key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Items>
        ))}
    </List>
  )
}
