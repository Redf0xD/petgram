import { useFavs } from '../../customHooks/useListOfFavs'
import { Grid, Link, Image } from './styles'

export const ListOfFavs = () => {
  const { loading, data = [] } = useFavs()
  if (loading) return <p>Loading...</p>
  const { favs } = data
  return (
    <Grid>
      {favs?.map(fav => (
        <Link to={`/detail/${fav.id}`} key={fav.id}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}
