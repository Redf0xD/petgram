import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map(key => <PhotoCard key={key} />)}
    </ul>
  )
}
