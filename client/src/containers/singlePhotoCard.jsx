import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useSinglePhoto } from '../customHooks/useSinglePhoto'

export const SinglePhotoCard = ({ id }) => {
  const { loading, error, data } = useSinglePhoto(id)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  const { photo } = data
  return <PhotoCard {...photo} />
}
