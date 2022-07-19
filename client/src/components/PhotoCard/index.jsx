import React from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { LazyLoad } from '../../customHooks/LazyLoad'
import { useLocalStorage } from '../../customHooks/useLocalStorage'
import { PlaceholderPhotoCard } from './placeholder'
import { FavButton } from '../FavButton'
import { useFavMutation } from '../../customHooks/useFavMutation'
import {Link} from 'react-router-dom'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({
  id,
  src = DEFAULT_IMAGE,
  likes = 0,
  loading = true
}) => {
  const { show, element } = LazyLoad()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [mutation] = useFavMutation(id)
  const handleFavClick = () => {
    !liked && mutation()
    setLiked(!liked)
  }
  return (
    <Article ref={element}>
      {show && (
        <>
          <PlaceholderPhotoCard loading={loading}>
            <Link to={`detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
          </PlaceholderPhotoCard>
        </>
      )}
    </Article>
  )
}
