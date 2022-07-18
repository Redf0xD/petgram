import React from 'react'
import { Img, ImgWrapper, Button, Article } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { LazyLoad } from '../../customHooks/LazyLoad'
import { useState } from 'react'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, element } = LazyLoad()
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch {
      return false
    }
  })
  const setLocalStorage = value => {
    window.localStorage.setItem(key, value)
    setLiked(value)
  }
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
