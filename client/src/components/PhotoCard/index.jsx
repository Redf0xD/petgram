import { Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  return (
    <article>
      <a href={`detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />
        {likes} likes!
      </Button>
    </article>
  )
}
