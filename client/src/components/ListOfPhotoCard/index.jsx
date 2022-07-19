import React from 'react'
import { useWithPhotos } from '../../customHooks/usePhotos'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data = []} = useWithPhotos(categoryId)
  if (error) return <p>Error :(</p>
  const { photos = []} = data
  return (
    <ul>
      {photos?.map(photo => (
        <PhotoCard key={photo.id} {...photo} loading={loading}/>
      ))}
    </ul>
  )
}
