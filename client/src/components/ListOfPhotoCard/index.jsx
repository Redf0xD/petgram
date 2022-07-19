import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import {withPhotos} from '../../hoc/withPhotos'

export const ListOfPhotoCard = ({categoryId}) => {
  const {loading, error, data} = useQuery(withPhotos, {variables: {categoryId}})
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const {photos = []} = data
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
    </ul>
  )
}
