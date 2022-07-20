import React from 'react'
import { useWithPhotos } from '../../customHooks/usePhotos'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data = [] } = useWithPhotos(categoryId)
  if (error) return <p>Error :(</p>
  const { photos = [] } = data
  return (
    <List>
      {photos?.map(photo => (
        <PhotoCard key={photo.id} {...photo} loading={loading} />
      ))}
    </List>
  )
}
