import React from 'react'
import { useParams } from 'react-router-dom'
import { SinglePhotoCard } from '../containers/singlePhotoCard'

export const Detail = () => {
  const { detailId } = useParams()
  return <SinglePhotoCard id={detailId}/>
}
