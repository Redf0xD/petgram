import React from 'react'
import { Img, ImgWrapper, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { LazyLoad } from '../../customHooks/LazyLoad'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, element } = LazyLoad()
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
